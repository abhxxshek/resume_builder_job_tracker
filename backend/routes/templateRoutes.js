const express=require('express');
const router=express.Router();  
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const payment=require('../models/Payment');


router.post('/payment-status',async(req,res)=>{
    try{
        const templateName=req.body.templateParam;
      
        const email=req.body.userEmail;
       
        const paymentDetails=await payment.findOne({email:email,template:templateName});
        if(paymentDetails){
            res.status(200).send({success:true});
        }else{
            res.status(400).send({success:false});
        }
        
    }
    catch(error){
        res.status(400).send({message:"Error in fetching payment details"});
        console.log(error);
    }
}   
);

module.exports=router;