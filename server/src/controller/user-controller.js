

import User from "../model/userSchema.js";
import jwt from "jsonwebtoken";

export const userSignup=  (request, response)=>{

   

        User.findOne( {
           email: request.body.email
        })
        .exec((error, user) =>{
            if(user) return response.status(400).json({
                message: 'user already registered'
            });


            const {
                firstName,
                lastName,
                email,
                password
            } = request.body;
            const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString()
            });

                    //await newUser.save();

        newUser.save((error, data) =>{
            if(data){
                return response.status(201).json({
                    message: 'User is successfully registered'
                });
            }
            if(error){
                //console.log(error);
                return response.status(400).json({
                    message: 'something went wrong'
                });
            }

 
        });

        });
 


        //response.status(200).json('User is successfully registered');


   

}


export const userLogin =  (request, response)=>{

    

       User.findOne( {
           email : request.body.email
        })
        .exec((error , user) =>{
            if(error) return response.status(400).json({error});

            if(user){
                if(user.authenticate(request.body.hash_password)){

                    const token = jwt.sign(
                        {_id: user._id} ,
                        process.env.JWT_SECRET ,
                        {
                            expiresIn: '5h'
                        }
                        );
                    const {username , email , role} = user;
                    
                    response.status(200).json({
                        token,
                        user: {
                            username, email , role
                        }
                    });

                }
                else{
                    return response.status(400).json({
                        message: 'Invalid Password'
                    })
                }
                //return response.status(200).json(`${request.body.username} login successfull`);
            }else{
                return response.status(400).json(`soemthing went wrong`);

            }
        })
        
        // else{
        //     return response.status(401).json('invalid login');
        // }


         

    // }catch(error){
    //     console.log('error',error.message);
    // }
    

}



