const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema(
  {
    done: { type: Boolean },
    content: { type: String },
    createAt: { type: Date, default: Date.now }
  },
  { collection: 'todo' }
);

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = { Todo };
