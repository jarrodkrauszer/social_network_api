const router = require('express').Router();

const { getAll, getOneById, create, update, deleteOneById } = require('../../controllers/thought_controller');

router.route('/')
  .get(getAll)
  .post(create);

router.route('/:id/reactions')
  .post()
  .delete();

router.route('/:id')
  .get(getOneById)
  .put(update)
  .delete(deleteOneById);

module.exports = router;