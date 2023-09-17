import {model,Schema} from "mongoose";
// Define a Mongoose schema and model for the Todo items
const todoSchema = new Schema({
    title: String,
    description: String,
    image: String,
    status: String,
  });
const Todo = model('Todo', todoSchema);

const getAlltodo = async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching TODO items' });
    }
  }
  


const createTodo = async (req, res) => {
    try {
      const todo = new Todo(req.body);
      const savedTodo = await todo.save();
      res.status(201).json(savedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Error creating TODO item' });
    }
  }
const deleteItemOFtodo = async (req, res) => {
    try {
      const deletedTodo = await Todo.findByIdAndRemove(req.params.id);
      if (!deletedTodo) {
        return res.status(404).json({ error: 'TODO item not found' });
      }
      res.json({ message: 'TODO item deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting TODO item' });
    }
  }

const updateItemOfTodo = async (req, res) => {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updatedTodo) {
        return res.status(404).json({ error: 'TODO item not found' });
      }
      res.json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Error updating TODO item' });
    }
  }

export {
    createTodo, updateItemOfTodo, deleteItemOFtodo, getAlltodo
}