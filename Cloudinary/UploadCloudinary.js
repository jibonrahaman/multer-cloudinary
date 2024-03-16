const cloudinary = require("cloudinary");
          
cloudinary.config({ 
  cloud_name: 'dxvyxea4n', 
  api_key: '947956513668134', 
  api_secret: 'hYWME4Hw69T94-mjq6gtBeqxF4U' 
});

const UploadCloudinary = async (localpath)=>{
   try {
   const UploadImg =  await cloudinary.uploader.upload(localpath)
   return UploadImg
   } catch (error) {
    console.log("UploadCloudinary catch error" ,error);
   }
} 

module.exports = UploadCloudinary