var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('request to /');
  res.render('index', { title: 'Express' });
});


// router.get('/state', function(req, res) {
//   res.send("GET request to state"); 
// }); 

module.exports = router;
