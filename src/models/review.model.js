import mongoose, {Schema} from "mongoose";

const reviewSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    default: null
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: null
  },
  title: {
    type: String,
    trim: true
  },
  rating: {
    type: Number,
    default: 0
  },
  review: {
    type: String,
    trim: true
  },
  isRecommended: {
    type: Boolean,
    default: true
  },
},
{timestamps: true});

export const Review = mongoose.model("Review", reviewSchema);