const router = require('express').Router();

const apiRoutes = require('./api_routes');

router.use('/api', apiRoutes);

module.exports = router;