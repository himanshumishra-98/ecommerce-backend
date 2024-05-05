import mongoose, {Schema} from "mongoose";

const addressSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  country: {
    type: String
  },
  zipCode: {
    type: String
  },
},
{timestamps: true});

export const Address = mongoose.model("Address", addressSchema);