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
    hash_password:{
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

//mongoose speciality
userSchema.virtual('password')
.set(function(password){

    this.hash_password = bcrypt.hashSync(password, 10);
});


//will return true or false
userSchema.methods = {
    authenticate: function(password ){
        return bcrypt.compareSync(password, this.hash_password);
    }
}
const User = mongoose.model('User', userSchema);

export default User;