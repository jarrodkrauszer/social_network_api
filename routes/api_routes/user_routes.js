const router = require('express').Router();

const { getAll, getOneById, create, update, deleteById, addFriend, deleteFriend } = require('../../controllers/user_controller');

router.route('/')
  .get(getAll)
  .post(create);

router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

router.route('/:id')
  .get(getOneById)
  .put(update)
  .delete(deleteById);

module.exports = router;


// /api/users/:userId/friends/:friendId