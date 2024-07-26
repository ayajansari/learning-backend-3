import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: this,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObejctId, //it will show which uses has created this todo
      ref: 'User', //user is from "User" model
    },
    subTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTodo',
      },
    ],
  },
  { timestamps: true }
);

export const todoSchema = mongoose.model('Todo', todoSchema);
