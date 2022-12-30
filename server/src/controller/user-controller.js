

import User from "../model/userSchema.js";


export const userSignup=  (request, response)=>{

   

        User.findOne( {
           email: request.body.email
        })
        .exec((error, user) =>{
            if(user) return response.status(400).json({
                message: 'user already registered'
            });


            const {
                password,
                username,
                email
            } = request.body;
            const newUser = new User({
                password,
                username,
                email
                //username: Math.random().toString();
            });

                    //await newUser.save();

        newUser.save((error, data) =>{
            if(error){
                //console.log(error);
                return response.status(400).json({
                    message: 'something went wrong'
                });
            }

            if(data){
                return response.status(201).json({
                    user: data
                });
            }
        });

        });
 


        //response.status(200).json('User is successfully registered');


   

}


export const userLogin =  async (request, response)=>{

    try{

        let user = await User.findOne( {
            username: request.body.username,
            password : request.body.password
        })
        if(user){
            return response.status(200).json(`${request.body.username} login successfull`);
        }
        else{
            return response.status(401).json('invalid login');
        }


         

    }catch(error){
        console.log('error',error.message);
    }
    

}


