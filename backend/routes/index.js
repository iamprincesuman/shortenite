const express = require('express');
const router = express.Router();
const linksController = require('../controllers/links_controller');

router.use('/users', require('./users'));
router.use('/links', require('./links'));
router.use('/qr', require('./qr'));
router.get('/:id', linksController.handleRedirect);

module.exports = router;