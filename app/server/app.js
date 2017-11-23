const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const crypto = require('crypto');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'build/uploads/')
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(16, function (err, raw) {
            cb(null, raw.toString('hex') + Date.now() +  path.extname(file.originalname));
        });
    }
});
const upload = multer({storage : storage});

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use('/store', express.static('../src/store'));
app.use('/uploads', express.static('../build/uploads'))
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/uploads/', upload.any(), (req, res)=>{

    let src = req.files[0].path;
    let content = fs.readFileSync(src, "utf8");
    res.status(200).json({
        "success" : true,
        "data" : req.files,
        "fill" : content
    });
});

app.delete('*', (req, res)=>{
    res.status(200).json({"success":true, "data": req.files});
});

module.exports = app;