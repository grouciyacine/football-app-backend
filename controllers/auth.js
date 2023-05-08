import { db } from "../connect.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const register=(req,res,next)=>{
    try{
    const q=`select * from user where email=?`
    db.query(q,[req.body.email],(err,data)=>{
        if(err) return res.status(409).json(err)
        if(data.length) return res.status(500).json('error Email Already Exist Please Change')
        const salt=bcrypt.genSaltSync(10);
        const newPass=bcrypt.hashSync(req.body.password,salt);
        const q="insert into user (`name`,`familyName`,`email`,`password`) values(?)"
        const values=[req.body.name,req.body.familyName,req.body.email,newPass]
        db.query(q,[values],(err,data)=>{
            if(err) return res.status(400).json(err);
            return res.status(202).json('data Add Success')
        })
    })
    }catch(e){
        next(e)
    }
    }
    export const login=(req,res,next)=>{
        try{
        const q=`select * from user where email=?`
        db.query(q,[req.body.email],(err,data)=>{
            if(err) return res.status(409).json(err)
            if(data.length===0) return res.status(500).json('error Email not Exist');
            const cheekPass=bcrypt.compare(req.body.password,data[0].password);
            if(!cheekPass) return res.status(500).json('error Wrong Password')
            const token=jwt.sign(
                {
                id:data[0].id
            },process.env.SECRETE_KEY)
            const {password,...others}=data[0]
            res.cookie("access_Token",token,{
                httpOnly:true
            }).status(200).json(others)
        })
        }catch(e){
            next(e)
        }
        }

