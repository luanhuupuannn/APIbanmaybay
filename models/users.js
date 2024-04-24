const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Users=new Schema(
    {
        username:{type:String, unique:true, maxLength:255},
        password:{type:String, maxLength:255},
        score:{type:Number, default:0},
        x:{type:Number,default:0},
        y:{type:Number, default:0},
        coin:{type:Number,default:0}
    },{
        timestamps:true
    }
)
module.exports=mongoose.model('user',Users)
/*
luu y: mongoose.model('user',User)
dat ten collection dang so it, thu vien
mongoose se tu tao ra ten collection so nhieu
vd: (user -> users)
*/
