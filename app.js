const express = require('express');
const fileUpload = require('express-fileupload')
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use(fileUpload());
app.use('/api', require('./routes/upload.routes'))

const PORT = config.get('port') || 5000;

app.listen(PORT, () => console.log('App has bee started on port:', PORT));