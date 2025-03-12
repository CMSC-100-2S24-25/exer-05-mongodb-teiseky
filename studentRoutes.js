const express = require('express');
const router = express.Router();
const studentController = require('./studentController');

router.post('/save-student', studentController.saveStudent);
router.post('/update', studentController.updateStudent);
router.post('/remove-user', studentController.removeUser);
router.post('/remove-all-user', studentController.removeAllUsers);
router.get('/user', studentController.getUser);
router.get('/members', studentController.getMembers);

module.exports = router;