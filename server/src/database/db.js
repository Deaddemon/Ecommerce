import mongoose from 'mongoose';


 

const Connection = async (username , password, database)=>{
    const URL =  `mongodb://${username}:${password}@cluster0-shard-00-00.9bfvd.mongodb.net:27017,cluster0-shard-00-01.9bfvd.mongodb.net:27017,cluster0-shard-00-02.9bfvd.mongodb.net:27017/${database}?ssl=true&replicaSet=atlas-j77ubk-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try
    {
        mongoose.connect(URL , {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        
         
        }).then(() =>{
            console.log('database connected');
        })
   

    } catch(error){
        console.log("error: ", error.message);

    }
    
}


export default Connection;