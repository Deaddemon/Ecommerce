import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
        min : 3,
        max : 20
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        min : 3,
        max : 20
    },
    username:{
        type: String,
        required: true,
        trim: true, 
        unique: true,
        index: true,
        lowercase: true
    },
    email:{
        type: String ,
        required: true,
        trim: true,
        unique: true,
        lowercase: true 
    },
    password:{
        type: String,
        required: true, 
        // trim: true,
        // min:5,
        // max:26,
         
    },
    mobile :
    {
        type:String,
        
    },

    role:{
        type: String,
        enum: ['user', 'admin'],
        default:'admin'
    },
    profilePicture:{
        type: String 
    }
},
);

userSchema.virtual('hash_password').set(function(hash_password){

    this.password = bcrypt.hashSync(hash_password, 10);
});


//will return true or false
userSchema.methods = {
    authenticate: function(hash_password){
        return bcrypt.compareSync(hash_password, this.password);
    }
}
const User = mongoose.model('User', userSchema);

export default User;