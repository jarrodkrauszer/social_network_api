const { User, Thought } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
       const users = await User.find();

       res.json(users);

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: err.message});
    }
  },

  async getOneById(req, res) {
    try {
      const user = await User.findById(req.params.id)
        .populate(['thoughts', 'friends']);

    res.json(user);

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  },

  async create(req, res) {
    try {
      const new_user = await User.create(req.body);

      res.json(new_user);

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: err.message });
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
      res.status(500).json({ message: err.message });
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
      res.status(500).json({ message: err.message });
    }
  },

  async addFriend(req, res) {
    try {
      console.log(req.params.userId, req.params.friendId);
      const user = await User.findByIdAndDelete(req.params.userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found with that ID'});
      }

      const friend = await User.findByIdAndDelete(req.params.friendId);

      if (!friend) {
        return res.status(404).json({ message: 'No friend found with that ID'});
      }

      user.friends.push(req.params.friendId);

      res.status(200).json({ message: 'New friend added!', user})

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  },

  async deleteFriend(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found with that ID'});
      }

      const friend = await User.findByIdAndDelete(req.params.friendId);

      if (!friend) {
        return res.status(404).json({ message: 'No friend found with that ID'});
      }

      user.friends.pull(req.params.friendId);
      user.save();

      res.status(200).json({ message: 'Friend removed from list!', user})

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }
};