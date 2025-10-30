const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getSchemes, createScheme } = require('../controllers/schemeController');

router.get('/', getSchemes);
router.post('/', auth, createScheme);

module.exports = router;
