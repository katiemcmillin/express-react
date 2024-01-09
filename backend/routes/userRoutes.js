const router = require('express').Router();
const { userCtrl } = require('../controllers') //all functions/methods imported from people's controller's index.js

// ROUTES - METHODS //
router.post('/', userCtrl.createUser)

module.exports = router;
