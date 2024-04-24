var express=require('express');
var router=express.Router();

router.get('/test',async(req,res) =>{
    res.json({
        "status":200,
        "message":"test",
    })
});

// thêm users
const Users=require('../models/users.js');
router.post('/add-user',async(req,res) =>{
    try{
        const data=req.body;//lay du lieu tu body
        const newUsers=new Users({
            username:data.username,
            password:data.password,
            score:0,
            x:data.x,
            y:data.y,
            coin:data.coin
        });//tao user moi
        const result=await newUsers.save();//them vao db
        console.log(result);
        if(result)//thanh cong
        {
            res.json({
                "status":200,
                "message":"Insert OK",
                "data":result
            })
        }
        else //them that bai
        {
            res.json({
                "status":400,
                "message":"Insert fail",
                "data":[]
            })
        }
    }
    catch(error)
    {
        console.log(error);
        res.json({
            "status":400,
            "message":"Insert fail",
            "data":[]
        })
    }
});

// bxh điểm cao nhất
router.get('/leaderboard',async(req,res) =>{
    try{
        const result=await Users.find().sort({score: -1 }).limit(10);
        res.json({
            "status":200,
            "message":"get success",
            "data":result
        })
    }catch(error)
    {
        res.json({
            "status":400,
            "message":error,
            "data":[]
        })
    }

});
// login
//check login
router.post('/checklogin',async(req,res) =>{
    try{
        const u=req.body.username;
        const p=req.body.password;
        const result=await Users.find({username:u,password:p});
        console.log(result);
        if(result.length!=0)//co du lieu login
        {
            res.json({
                "status":200,
                "message":"login sucess",
                "data":result
            })
        }
        else
        {
            console.log(error);
            res.json({
            "status":400,
            "message":"login fail",
            "data":[]
            })
        }

    }catch(error){
        console.log(error);
        res.json({
            "status":400,
            "message":"login fail",
            "data":[]
        })
    }
});
// cập nhật lại điểm 
//sua score cua user
router.put('/updatescore/:username', async (req, res) => {
    try{
        const u = req.params.username;
        const newscore = req.body.score;

        const result = await Users.updateOne(
            { username: u },
            { $set: { score: newscore }
              }
        );
        if (result.matchedCount > 0) 
        {
            res.json({
                "status":200,
                "message":"update sucess",
                "data":result
            })
        }
        else
        {
            res.json({
                "status":400,
                "message":"update fail",
                "data":[]
            })
        }

    }catch(error)
    {
        console.log(error);
        res.json({
            "status":400,
            "message":"update fail",
            "data":[]
        })
    }
});


//sua coin cua user
router.put('/updatecoin/:username', async (req, res) => {
    try{
        const u = req.params.username;
        const newcoin = req.body.coin;

        const result = await Users.updateOne(
            { username: u },
            { $set: { coin: newcoin }
              }
        );
        if (result.matchedCount > 0) 
        {
            res.json({
                "status":200,
                "message":"update sucess",
                "data":result
            })
        }
        else
        {
            res.json({
                "status":400,
                "message":"update fail",
                "data":[]
            })
        }

    }catch(error)
    {
        console.log(error);
        res.json({
            "status":400,
            "message":"update fail",
            "data":[]
        })
    }
});


//sua vatphamx cua user
// dongf mow
router.put('/updatex/:username', async (req, res) => {
    try{
        const u = req.params.username;
        const newx = req.body.x;

        const result = await Users.updateOne(
            { username: u },
            { $set: { x: newx }
              }
        );
        if (result.matchedCount > 0) 
        {
            res.json({
                "status":200,
                "message":"update sucess",
                "data":result
            })
        }
        else
        {
            res.json({
                "status":400,
                "message":"update fail",
                "data":[]
            })
        }

    }catch(error)
    {
        console.log(error);
        res.json({
            "status":400,
            "message":"update fail",
            "data":[]
        })
    }
});



module.exports = router;
