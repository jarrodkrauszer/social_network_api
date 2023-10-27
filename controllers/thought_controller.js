const { User, Thought } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
       const thoughts = await Thought.find();

       res.json(thoughts);

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: 'No thoughts found.'});
    }
  },

  async getOneById(req, res) {
    try {
      const thought = await Thought.findById(req.params.id)
        .populate('reactions');

    res.json(thought);

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: 'No users found.'});
    }
  },
};