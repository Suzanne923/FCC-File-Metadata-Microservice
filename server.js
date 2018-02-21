const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' })

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(process.cwd() + '/views'));

// Routes
app.post('/get-file-size', upload.single('file'), (req, res) => {
  res.json({ size: req.file.size });
});

app.listen(process.env.PORT, () => {
  console.log('Node.js listening ...');
});

