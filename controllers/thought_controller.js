const { User, Thought } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
       const thoughts = await Thought.find();

       res.json(thoughts);

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: err.message});
    }
  },

  async getOneById(req, res) {
    try {
      const thought = await Thought.findById(req.params.id)
        .populate('reactions');

    res.json(thought);

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: err.message});
    }
  },

  async deleteOneById(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.id);

      if (!thought) {
        res.status(404).json({ message: 'User not found with that ID.'});
      }

      res.status(200).json({ message: 'User was deleted', thought});

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: err.message});
    }
  },

  async create(req, res) {
    try {
      const user = await User.findById(req.body.user_id);

      if (!user) {
        return res.status(404).json({ message: 'User not found with that ID.'});
      }

      const thoughtText = req.body.thoughtText;

      const thought = await Thought.create({
        thoughtText,
        username: user.username
      });

      res.status(200).json({ message: 'Thought created!', thought});

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: err.message});
    }
  },

  async update(req, res) {
    try {
      const updated_thought = await Thought.findByIdAndUpdate(req.params.id, {
        $set: {
          thoughtText
        }
      })

      res.status(200).json({ message: 'User updated!', updated_thought});
    } catch(err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }
};