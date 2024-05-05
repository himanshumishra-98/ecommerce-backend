import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema({
  name:{
    type: String,
    required: true,
    unique: true,
  },
  description:{
    type: String,
    required: true
  },
  imageUrl:{
    type: String,
    required: true
  },
},
{timestamps: true});

export const Category = mongoose.model("Category",categorySchema);