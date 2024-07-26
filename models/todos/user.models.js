import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requird: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //timestamps filed is not mandatory
    //Mongoose schemas support a timestamps option. If you set timestamps: true,  Mongoose will add two properties of type Date to your schema:
    // createdAt: a date representing when this document was created
    // updatedAt: a date representing when this document was last updated
  }
);

export const User = mongoose.model('User', userSchema); //this model will be in mongodb by name of "users"

//while creating data models,first created data models for independent data like users here,then dependent like subTodo,todo .
