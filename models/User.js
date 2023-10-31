const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/gi, 'Not a valid email!']
  },
  thoughts: [{ 
    type: Schema.Types.ObjectId,
     ref: 'Thought',
    }],
  friends: [{ 
    type: Schema.Types.ObjectId,
      ref: 'User',
    }],
}, {
  toJSON: {
    virtuals: true,
    getter: true
  },
  id: false
});

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;