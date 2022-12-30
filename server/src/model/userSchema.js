import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    password:{
       type: String,
        required: true, 
        min:5,
        max:26,
         
    },
    mobile :
    {
        type:String,
        required: true,
        index: true

    },
    username:{
        type: String,
        required: true,
        trim: true, 
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
    role:{
        type: String,
        enum: ['user', 'admin'],
        default:'admin'
    },
    profile_picture:{
        type: String 
    }
});

userSchema.virtual('hash_password').set(function(hash_password){

    this.password = bcrypt.hashSync(hash_password, 10);
})


//will return true or false
userSchema.method = {
    authenticate: function(hash_password){
        return bcrypt.compare(hash_password, this.password);
    }
}
const user = mongoose.model('user', userSchema);

export default user;