import{MongoClient} from 'mongodb'
const dbUrl='mongodb+srv://hadeelwadia:hadeel2001@cluster0.h0gauas.mongodb.net/?retryWrites=true&w=majority'
const dbName='todo_list'
const client=new MongoClient(dbUrl)
const db = client.db(dbName);

const collection = db.collection('todos');

const connectInDB= async _=>{
try{
        await client.connect()
         console.log('successfull conecnt with db')
 }
 catch(error){
    console.log(`error:${error.name}`)
  } 
}









   
export {connectInDB,collection};


