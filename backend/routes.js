var router = require('express').Router();

// server routes ====================

// NONE

// frontend routes ==================

//route to handle all angular requests
router.route('/')
  .get(function(req, res){ res.sendFile('frontend/app/index.html', { root: __dirname + '/..' }); }); // GET only

module.exports = router;
