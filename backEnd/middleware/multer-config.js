const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'video/mp4': 'mp4',
  'video/avi': 'avi',
  'video/mkv': 'mkv',
  'video/png': 'webm'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'imagesAndVideos');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('image');