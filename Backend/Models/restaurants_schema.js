const mongoose = require("mongoose");

// Define the restaurant schema
const restaurantSchema = new mongoose.Schema(
  {
    rest_name: {type: String,required: true,},
    rest_price: {type: String,required: true,},
    category: {type: [String],required: true,},
    full_address: {type: String,required: true,},
    contact: {type: [String],required: false,},
    image_urls: {type: [String],required: false,},
    state: {type: String,required: true,},
    city: {type: String,required: true,},
  }
);

// Create the model
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

// Export the model
module.exports = Restaurant;
