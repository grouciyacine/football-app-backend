import {db} from '../connect.js'

export const getPlayers=(req,res,next)=>{
    try{

        const q=`select * from players where clubId=? and position='Goalkeeper ' `
        db.query(q,[req.params.id],(err,data)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json(data)
        })
    }catch(e){
        next(e)
    }
}
export const getDEFENDER=(req,res,next)=>{
    try{

        const q=`select * from players where clubId=? and position='Defender' `
        db.query(q,[req.params.id],(err,data)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json(data)
        })
    }catch(e){
        next(e)
    }
}
export const getMIDFIELDER=(req,res,next)=>{
    try{

        const q=`select * from players where clubId=? and position='Midfielder' `
        db.query(q,[req.params.id],(err,data)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json(data)
        })
    }catch(e){
        next(e)
    }
}
export const getSTRIKER=(req,res,next)=>{
    try{

        const q=`select * from players where clubId=? and position='Forward' `
        db.query(q,[req.params.id],(err,data)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json(data)
        })
    }catch(e){
        next(e)
    }
}