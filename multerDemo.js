const express = require('express');
const multer = require('multer');
const path =  require('path');
const fs = require('fs')
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
    res.send(`File uploaded successfully:<a href="/download/ ${req.file.filename}">${req.file.filename}</a>`);
});

//Download route
app.get('/',(req,res)=>{
    res.send(
        `
        <h2>upload file</h2>
        <form action ='/upload method="post" enctype="multipart/form-data">
        <input type="file" name="myFile"/>
        <button type="submit">upload</button></form>`
    )
})

app.get('/download/:filename',(req,res)=>{
    const filePath = path.join(__dirname,'uploads',req.params.filename);
    if(fs.existsSync(filePath)){
        res.download(filePath);
    }else{
        res.status(404).send('file not found');
    }
});

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})