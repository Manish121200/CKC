const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotel_name: { type: String, required: true },
    hotel_price: { type: String, required: true },
    services: { type: String, required: true },
    full_address: { type: String, required: true }, // Updated field name
    contact: { type: Number, required: true }, // Added contact field
    state: { type: String, required: true }, // Existing field
    city: { type: String, required: true }, // Existing field
    image_urls: { type: [String], required: true } // Array of image URLs
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
