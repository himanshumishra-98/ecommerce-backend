import mongoose, {Schema} from "mongoose";

const brandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
},
{timestamps: true});

export const Brand = mongoose.model("Brand",brandSchema);