import { db } from "../connect.js";
import fs from 'fs';
import path from 'path'
export const addLig=(req,res,next)=>{
    try{
        const cwd = process.cwd();
// Construct the path to the image file relative to the current working directory
const imagePath = path.join(cwd, 'images', 'premier.jpg');
        const imageBuffer = fs.readFileSync(imagePath);
        const q="insert into foot (`title`,`img`,`desc`) values(?)"
        const values=[req.body.title,imageBuffer,req.body.desc]
        db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json('data inserted with success')
        })
    }catch(e){
        next(e)
    }
}
export const getLig=(req,res,next)=>{
    try{
        const q="select img from foot"

        db.query(q,(err,data)=>{
            if(err) return res.status(500).json(err)
            const imageBuffer = Buffer.from(data[1].img, 'binary');
            fs.writeFile('image.jpg', imageBuffer, function(err) {
                if (err) throw err;
                console.log('Image saved to file');

              });
              const images = [];
  data.forEach(row => {
    const imageBuffer = row.img;
    const imageBase64 = imageBuffer.toString('base64');
    images.push(imageBase64);
  });

              //const imageData = data[1].img;
              //const base64Image = Buffer.from(imageData).toString('base64');
              return res.send(images);
            // return res.status(200).json(base64Image)
        })
    }catch(e){
        next(e)
    }
}
export const getImages = (req, res) => {
    db.query('SELECT * FROM foot', (error, results, fields) => {
      if (error) throw error;
      const images = results.map(result => {
        const base64 = Buffer.from(result.img).toString('base64');
        return { id: result.id, img: base64,title:result.title,desc:result.desc };
      });
      res.status(200).json(images);
    });
  };