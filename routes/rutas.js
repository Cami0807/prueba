const express = require('express');
const router = express.Router();

const controllers = require('../controllers/controllers');

router.get('/menu', controllers.menu);

router.get('/index',controllers.index);

module.exports = router;