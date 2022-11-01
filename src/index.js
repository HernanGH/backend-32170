const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage })

app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file)
})

app.post('/uploadfiles', upload.array('myFiles'), (req, res, next) => {
  const files = req.files
  if (!files || files.length == 0) {
    const error = new Error('Please upload files')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(files)
})


app.listen(3000, () => console.log('APP running in localhost:3000'));