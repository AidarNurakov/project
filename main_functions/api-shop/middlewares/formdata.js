// const formidable = require('formidable');

// exports.parseFormData = function (req, res, next) {
//   const form = new formidable.IncomingForm();
//   form.parse(req, (err, fields, files) => {
//     if (err) {
//       console.log('Error from parsing form data: ', err)

//       next(err);
//       return;
//     }

//     req.body = fields;
//     req.files = files;

//     next();
//   });
// }