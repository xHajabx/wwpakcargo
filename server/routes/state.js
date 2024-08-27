var express = require('express');
var router = express.Router();

// const stateController

/* GET users listing. */
router.get('/', function(req, res) {
  // res.json({message: "state request sent to state router"}); 
  res.send("succesful request to state router"); 
});


router.get('/state=:id', function(req, res) {
  res.send("request state sent with id"); 
}); 

module.exports = router;


