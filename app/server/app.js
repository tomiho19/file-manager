const crypto = require('crypto');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');
var storage = multer.diskStorage({
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
// Always return the main index.html, so react-router render the route in the client

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/uploads/', upload.any(), (req, res)=>{
    console.log(req.files);
    res.status(200).json({"success" : true, "data" : req.files});
});

app.delete('*', (req, res)=>{
    console.log(req);
    res.status(200).json({"success":true, "data": req.files});
});

module.exports = app;