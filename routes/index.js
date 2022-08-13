var express = require('express');
var router = express.Router();


// router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   next() 
// })

/* GET home page. */
router.get('/', (req, res) => {
  // res.send('GET request to the homepage')
  res.render('index', {title: 'WWPAKCARGO'})
  
})

module.exports = router;
