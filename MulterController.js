const UploadCloudinary = require("./Cloudinary/UploadCloudinary");

async function MulterController (req,res){
 
 const {path} = req.file
 const resCloudinary = await UploadCloudinary(path)
 console.log(resCloudinary.url);
}
module.exports = MulterController;