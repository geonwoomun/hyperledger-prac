const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({ // 사진 업로드 할 때 사용.
    detination : function(req, file, cb){
        cb(null, 'uploads');
    },
    filename : function(req, file, cb){
        cb(null, moment().format('YYYYMMDDHHmmss') + "_"+file.originalname);
    }
});

const upload = multer({ storage: storage}).single("file")

module.exports = upload;