const { Router } = require('express');
const authCotroller = require('../controllers/authControllers')
const router = Router();
const auth = require('../middleware/auth')

router.post('/register', authCotroller.signup);
router.post('/login', authCotroller.login);
router.get('/user', authCotroller.get_user);

module.exports = router;