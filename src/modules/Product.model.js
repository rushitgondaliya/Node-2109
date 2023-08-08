const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      trim: true,
    },
    product_price: {
      type: number,
      trim: true,
    },
    product_item: {
      type: number,
      trim: true,
    },
    is_active: {
      type: Boolean,
    default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const product = mongoose.model("product",productSchema)

module.exports = product