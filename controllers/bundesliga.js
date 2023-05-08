import {db} from '../connect.js'
import fs from 'fs';
import path from 'path'
import B2 from 'backblaze-b2'

/*export const insertClub=(req,res,next)=>{
    try{
        const cwd = process.cwd();
        const img = path.join(cwd, 'images', 'bayern.png');
        const local=path.join(cwd, 'images', 'localCup.png');
        const bfd=path.join(cwd, 'images', 'AllCup.png');
        const Erupa=path.join(cwd, 'images', 'Eroupa.png');
        cloudinary.config({
            cloud_name: "dlagodwt2",
            api_key: "452952129178187",
            api_secret: "DJhFrdw5tvA07hCB47zjf-7sxbc"
          });
          const res = cloudinary.uploader.upload(img, {public_id: "bayern"})
          const res1 = cloudinary.uploader.upload(local, {public_id: "1"})
          const res2 = cloudinary.uploader.upload(bfd, {public_id: "2"})
          const res3 = cloudinary.uploader.upload(Erupa, {public_id: "3"})
          
res.then((data) => {
  console.log(data);
  console.log(data.secure_url);
}).catch((err) => {
  console.log(err);
});
        /*const cwd = process.cwd();
        // Construct the path to the image file relative to the current working directory
        const img = path.join(cwd, 'images', 'svw.png');
        const stadium_img=path.join(cwd,'images' ,'svw.jpg');
        const localCupImg=path.join(cwd,'images','localCup.jpg')
        const EroupaCupImg=path.join(cwd,'images','Eroupa.png')
        const AllCupImg=path.join(cwd,'images','AllCup.png')
        const imageBuffer = fs.readFileSync(img);
        const stadium_imgBuffer = fs.readFileSync(stadium_img);
        const localCupImgBuffer = fs.readFileSync(localCupImg);
        const EroupaCupImgBuffer = fs.readFileSync(EroupaCupImg);
        const AllCupImgBuffer = fs.readFileSync(AllCupImg);*/
       /* const q="insert into bundesliga (`name`,`img`,`desc`,`localCup`,`EroupaCup`,`localImg`,`eroupaImg`,`AllCup`,`allImg`) values(?)"
        const values=[req.body.name,res,req.body.desc,req.body.localCup,req.body.EroupaCup,res1,res3,req.body.AllCup,res2]
        db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json('added with success')
        })
    }catch(err){
        next(err)
    }
}*/
export const getClubs=(req,res,next)=>{
    try{
        const q="select * from bundesliga where liga_id=?"
        db.query(q,[req.params.id],(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json(data)
        })
    }catch(err){
        next(err)
    }
}

export const getStade=(req,res,next)=>{
  try{
        const q="select S.*,T.* from stade as S join tshirt as T on (S.club_id=T.club) where club_id=?"
        db.query(q,[req.params.id],(err,data)=>{
          if(err) return res.status(500).json(err)
          return res.status(200).json(data)
        })
  }catch(e){
    next(e)
  }
}
export const getShirt=(req,res,next)=>{
  
}