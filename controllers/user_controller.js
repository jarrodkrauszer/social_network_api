const { User, Thought } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
       const users = await User.find();

       res.json(users);

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: 'No users found.'});
    }
  },

  async getOneById(req, res) {
    try {
      const user = await User.findById(req.params.id)
        .populate(['thoughts', 'friends']);

    res.json(user);

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: 'No users found.'});
    }
  },

  async create(req, res) {
    try {
      const new_user = await User.create(req.body);

      res.json(new_user);

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: 'No users found.'});
    }
  },

  async update(req, res) {
    try {
      const updated_user = await User.findByIdAndUpdate(req.params.id, {
        $set: {
          username,
          email
        }
      })

      res.status(200).json({ message: 'User updated!', updated_user});
    } catch(err) {
      console.log(err);
      res.status(500).json({ message: 'No users found.'});
    }
  },

  async deleteById(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      if (!user) {
        res.status(404).json({ message: 'User not found with that ID.'});
      }

      res.status(200).json({ message: 'User was deleted', user});

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: 'No users found.'});
    }
  }
};