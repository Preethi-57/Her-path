const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getResources, createResource, verifyResource } = require('../controllers/resourceController');

router.get('/', getResources);
router.post('/', auth, createResource);
router.put('/verify/:id', auth, verifyResource);

module.exports = router;
