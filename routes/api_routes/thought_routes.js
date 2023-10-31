const router = require('express').Router();

const { getAll, getOneById, create, update, deleteOneById, addReaction, deleteReaction } = require('../../controllers/thought_controller');

router.route('/')
  .get(getAll)
  .post(create);

router.route('/:id/reactions')
  .post(addReaction);
  
router.route('/:id/reactions/:reactionId')
  .delete(deleteReaction);  

router.route('/:id')
  .get(getOneById)
  .put(update)
  .delete(deleteOneById);

module.exports = router;