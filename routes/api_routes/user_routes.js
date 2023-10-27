const router = require('express').Router();

const { getAll, getOneById, create, update, deleteById } = require('../../controllers/user_controller');

router.route('/')
  .get(getAll)
  .post(create);

router.route('/:id')
  .get(getOneById)
  .put(update)
  .delete(deleteById);

module.exports = router;