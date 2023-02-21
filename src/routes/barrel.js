const express = require('express');
const { addBarrel, getBarrels } = require('../controllers/barrel');

const router = express.Router();

router.post('/', addBarrel);
router.get('/', getBarrels)

module.exports = router;