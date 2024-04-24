const mongoose=require('mongoose')
mongoose.set('strictQuery',true)
//ten database tu sua cho dung
const local="mongodb://127.0.0.1:27017/demogame"
const atlat="mongodb+srv://luan:123@cluster0.kugzap4.mongodb.net/demogame"
const connect = async()=>{
    try{
        
        await mongoose.connect(atlat,
            {
                useNewUrlParser:true,
                useUnifiedTopology:true
            }
        )
        console.log('connect success')
    }catch(error)
    {
        console.log(error)
        console.log('connect fail')
    }
}
module.exports={connect}
