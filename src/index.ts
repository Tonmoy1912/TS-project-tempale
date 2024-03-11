import express,{ Express, Response, Request } from "express";

const app:Express=express();
app.use(express.json());
app.use(express.urlencoded());

app.get("/",function(req:Request,res:Response){
    try{
        return res.status(200).json({ok:true,message:"All ok"});
    }
    catch(err:any){
        return res.status(500).json({ok:false,message:err.message});
    }
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});