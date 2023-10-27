const router = require('express').Router()

const thought_routes = require('./thought_routes');
const user_routes = require('./user_routes');

router.use('/user', user_routes);
router.use('/thought', thought_routes);

module.exports = router;
