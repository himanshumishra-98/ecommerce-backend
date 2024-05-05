import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  brand: { 
    type : Schema.Types.ObjectId,
    ref: "Brand",
  },
  discountPercentage: { 
    type: Number, 
    min:[1, 'wrong min discount'], 
    max:[99, 'wrong max discount']
  },
  discountPrice: { 
    type: Number
  },
},
{timestamps: true});

export const Product = mongoose.model("Product",productSchema);