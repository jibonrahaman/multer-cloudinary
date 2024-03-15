const express = require("express");
const MulterController = require("./MulterController");
const upload = require("./Midleware/Multer")
const app = express();
const port = 8000; 
app.listen(port ,() =>{
  console.log("server is running 8000");
})
app.post("/api/v1/uploads",upload.single("UploadImg"),MulterController) 