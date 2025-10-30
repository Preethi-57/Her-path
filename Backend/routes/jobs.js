const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getJobs, createJob } = require('../controllers/jobController');

router.get('/', getJobs);
router.post('/', auth, createJob);

module.exports = router;
