const express = require('express');
const multer = require('multer');
const path =  require('path');

const app = express();
const port = 3001;

//Configure disk storage
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'D:/EdgeVerve/Node.js/uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({storage:storage})

app.get('/',(req,res)=>{
    res.send(`
        <h2>File upload with multer</h2>
        <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="flower"/>
        <button type="submit">upload</button>
        </form>`);
});

//handle upload post route
app.post('/upload', upload.single('flower'),(req,res)=>{
    if(!req.file){
        return res.status(400).send('No file uploaded: ');
    }
    res.send(`File uploaded successfully: ${req.file.filename}`);
});

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})