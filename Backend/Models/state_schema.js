// const mongoose = require('mongoose');

// const state_schema = new mongoose.Schema({
//   state_name: { type: String, required: true },
//   state_description: { type: String, required: true },
//   image_urls: { type: [String], required: true }
// });

// module.exports = mongoose.model('State', state_schema);

const mongoose = require("mongoose");

const state_schema = new mongoose.Schema({
  state_name: { type: String, required: true }, // "State Name"
  small_description: { type: String, required: true }, // "Small Description"
  long_description: { type: String, required: true }, // "Long Description"
  top_attraction: { type: String, required: true }, // "Top Attraction"
  image_urls: { type: [String], default: [] }, // "Images" (as an array in case of multiple images)
});

module.exports = mongoose.model("State", state_schema);
