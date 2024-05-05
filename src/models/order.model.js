import mongoose, {Schema} from "mongoose";

const orderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const orderSchema = new Schema(
  {
    items: [orderItemSchema],
    totalPrice: {
      type: Number,
      required: true
    },
    totalItems: { 
      type: Number 
    },
    user: { 
      type: Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered"],
      default: "pending"
    },
  },  
  { timestamps: true }
);
export const Order = mongoose.model("Order",orderSchema);