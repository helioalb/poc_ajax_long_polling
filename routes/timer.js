var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  setTimeout(() => {
    res.send(`The last update was at ${new Date()}`)
  }, 1000 * (Math.random() * 50));
});

module.exports = router;
