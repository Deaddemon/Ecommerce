
 
import User from "../../model/userSchema.js";
import jwt from "jsonwebtoken";

export const userSignup=  (request, response)=>{

   

        User.findOne( {
           email: request.body.email
        })
        .exec((error, user) =>{
            if(user) return response.status(400).json({
                message: 'admin already registered'
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
                username: Math.random().toString(),
                role : 'admin'
            });

                    //await newUser.save();

        newUser.save((error, data) =>{
            if(data){
                return response.status(201).json({
                    message: 'admin is successfully registered'
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
            if(error){
                 return response.status(400).json({error});
            }

            if(user){
                if(user.authenticate(request.body.password) && user.role === 'admin'){

                    const token = jwt.sign(
                        {_id: user._id , role: user.role } ,
                        process.env.JWT_SECRET ,
                        {
                            expiresIn: '5h'
                        }
                        );
                    const {_id , firstName , email , role} = user;
                    
                    response.status(200).json({
                        token,
                        user: {
                            _id , 
                            firstName, 
                            email , 
                            role
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
                return response.status(400).json({
                    message : 'soemthing went wrong'
                })

            }
        })
        
        // else{
        //     return response.status(401).json('invalid login');
        // }


         

    // }catch(error){
    //     console.log('error',error.message);
    // }
    

}


// export const requireLogin = (req , res , next) => {
//     const token =  req.headers.authorization.split(" ")[1];
//     const user = jwt.verify(token , process.env.JWT_SECRET);

//     req.user = user;
//     next();


// }

