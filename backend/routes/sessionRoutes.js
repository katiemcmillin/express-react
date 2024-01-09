const router = require('express').Router();
const { sessionCtrl } = require('../controllers') //all functions/methods imported from people's controller's index.js

// ROUTES - METHODS //
router.get('/', sessionCtrl.getSession)
router.post('/', sessionCtrl.createSession)
router.delete('/', sessionCtrl.deleteSession)

module.exports = router;