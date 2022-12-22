const { celebrate, Joi } = require('celebrate');
const router = require('express').Router();
const NotFoundError = require('../utils/errors/NotFoundError');
const auth = require('../middlewares/auth');
const { REGEX } = require('../utils/constants');
const { createUser, login, signout } = require('../controllers/users');
const { loginRule, createUserRule } = require('../utils/validationRules');

router.post('/signin', loginRule, login);

router.post('/signup', createUserRule, createUser);

router.post('/signout', signout);

router.use(auth);

router.use('/users', require('./users'));
router.use('/cards', require('./cards'));

router.use((req, res, next) => {
  next(new NotFoundError('Ресурс не найден'));
});

module.exports = router;
