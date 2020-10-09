var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var productSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    descriptiton: {
      type: String,
      require: true,
    },
  },
  { collection: "products", timestamps: true }
);

if (!mongoose.models.Product) {
  mongoose.model("Product", productSchema);
}

module.exports = mongoose.model("Product", productSchema);
