import mongoose from 'mongoose';
const dbUrl='mongodb+srv://hadeel:hadeel2001@cluster0.h0gauas.mongodb.net/?retryWrites=true&w=majority'
const connectInDB= async _=>{
try{
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }) 
console.log('succfull conacnt with db')
}catch(error){
console.log(`error:${error.name}`)
}
}
export default connectInDB;


