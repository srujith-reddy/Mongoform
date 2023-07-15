import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/',{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{console.log("Database connected")})
.catch((err)=>console.log("There is an error srujith",err))


const dbschema=mongoose.Schema({
    username:String,
    email:{
        require:true,
        type:String,
    },
});

const storer=mongoose.model('store',dbschema);

export default storer;