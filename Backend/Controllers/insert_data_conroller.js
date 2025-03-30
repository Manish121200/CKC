const State = require("../Models/state_schema");
const City = require("../Models/city_schema");
const Hotel = require("../Models/hotel_schema");
const Restaurant = require('../Models/restaurants_schema');


// new_state
exports.insertStateDataController = async (req, res) => {
  try {
    const { states } = req.body;

    // Log the incoming states
    // console.log("Incoming states:", states);

    // Ensure the 'states' data is an array
    if (!Array.isArray(states)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    // Check for existing states by 'state_name'
    const existingStates = await State.find({
      state_name: { $in: states.map((state) => state.state_name) },
    });
    const existingStateNames = existingStates.map((state) => state.state_name);

    // Filter out states that already exist in the database
    const newStates = states.filter(
      (state) => !existingStateNames.includes(state.state_name)
    );

    // If there are no new states to add
    if (newStates.length === 0) {
      return res.status(200).json({ message: "No new states to add" });
    }

    // Map the incoming state data to the model's schema format
    const stateDocuments = newStates.map((state) => ({
      state_name: state.state_name,
      small_description: state.small_description,
      long_description: state.long_description,
      top_attraction: state.top_attraction,
      image_urls: state.image_urls || [], // Ensure this is an array
    }));

    // Log the state documents before inserting
    // console.log("State documents to insert:", stateDocuments);

    // Insert the new states into the database
    const addedStates = await State.insertMany(stateDocuments);

    // Return success response
    res.status(200).json({ message: "States Added Successfully", addedStates });
  } catch (error) {
    console.log(error);
    // Handle any errors
    res.status(500).json({ message: "Error adding states", error });
  }
};


// Insert multiple restaurants
exports.insertRestaurantDataCollector = async (req, res) => {
  try {
    const { restaurants } = req.body;

    // Check if 'restaurants' is an array
    if (!Array.isArray(restaurants)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    // Find existing restaurants by matching restaurant name
    const existingRestaurants = await Restaurant.find({
      rest_name: { $in: restaurants.map((restaurant) => restaurant.rest_name) },
    });
    const existingRestaurantNames = existingRestaurants.map((restaurant) => restaurant.rest_name);

    // Filter out restaurants that already exist
    const newRestaurants = restaurants.filter(
      (restaurant) => !existingRestaurantNames.includes(restaurant.rest_name)
    );

    // If there are no new restaurants to add
    if (newRestaurants.length === 0) {
      return res.status(200).json({ message: "No new restaurants to add" });
    }

    // Map new restaurants to the schema format
    const restaurantDocuments = newRestaurants.map((restaurant) => ({
      rest_name: restaurant.rest_name,
      rest_price: restaurant.rest_price,
      category: restaurant.category || [], // Ensure category is an array
      full_address: restaurant.full_address || "Address not provided", // Handle missing address
      contact: restaurant.contact || [], // Default to an empty array
      image_urls: restaurant.image_urls || [], // Ensure image_urls is an array
      state: restaurant.state || "", // Default to empty string
      city: restaurant.city || "", // Default to empty string
    }));

    // Insert new restaurant documents into the database
    const addedRestaurants = await Restaurant.insertMany(restaurantDocuments);

    // Return success response
    res.status(200).json({ message: "Restaurants Added Successfully", addedRestaurants });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding restaurants", error });
  }
};



// // Insert multiple states
// exports.insertStateDataController = async (req, res) => {
//   try {
//     const { states } = req.body;

//     if (!Array.isArray(states)) {
//       return res.status(400).json({ message: "Invalid data format" });
//     }

//     // Check for existing states
//     const existingStates = await State.find({
//       state_name: { $in: states.map((state) => state.state_name) },
//     });
//     const existingStateNames = existingStates.map((state) => state.state_name);

//     const newStates = states.filter(
//       (state) => !existingStateNames.includes(state.state_name)
//     );

//     if (newStates.length === 0) {
//       return res.status(200).json({ message: "No new states to add" });
//     }

//     const addedStates = await State.insertMany(newStates);
//     res.status(200).json({ message: "States Added Successfully", addedStates });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error adding states", error });
//   }
// };

// Insert multiple cities
// exports.insertCityDataController = async (req, res) => {
//   try {
//     const { cities } = req.body;

//     if (!Array.isArray(cities)) {
//       return res.status(400).json({ message: "Invalid data format" });
//     }

//     // Check for existing cities
//     const existingCities = await City.find({ city_name: { $in: cities.map(city => city.city_name) } });
//     const existingCityNames = existingCities.map(city => city.city_name);

//     const newCities = cities.filter(city => !existingCityNames.includes(city.city_name));

//     if (newCities.length === 0) {
//       return res.status(200).json({ message: "No new cities to add" });
//     }

//     const cityDocuments = newCities.map(city => ({
//       city_name: city.city_name,
//       city_description: city.city_description,
//       state: city.state // Add the state as a string field
//     }));

//     const addedCities = await City.insertMany(cityDocuments);

//     if (addedCities.length === 0) {
//       return res.status(500).json({ message: "No cities added" });
//     }

//     res.status(201).json({ message: "Cities Added Successfully", addedCities });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error adding cities", error });
//   }
// };

exports.insertCityDataController = async (req, res) => {
  try {
    const { cities } = req.body;

    console.log('Request body:', req.body); // Log request body

    if (!Array.isArray(cities)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    const existingCities = await City.find({
      city_name: { $in: cities.map((city) => city.city_name) },
    });
    const existingCityNames = existingCities.map((city) => city.city_name);

    const newCities = cities.filter(
      (city) => !existingCityNames.includes(city.city_name)
    );

    if (newCities.length === 0) {
      return res.status(200).json({ message: "No new cities to add" });
    }

    const cityDocuments = newCities.map((city) => {
      return {
        city_name: city.city_name,
        city_description: city.city_description,
        state: city.state,
        image_urls: city.image_urls // Keep it as an array
      };
    });

    console.log('Cities to be added:', cityDocuments); // Log cities to be added

    const addedCities = await City.insertMany(cityDocuments);

    if (addedCities.length === 0) {
      return res.status(500).json({ message: "No cities added" });
    }

    res.status(200).json({ message: "Cities Added Successfully", addedCities });
  } catch (error) {
    console.error('Error details:', error); // Log error details
    res.status(500).json({ message: "Error adding cities", error: error.message });
  }
};





// Hotel Completed
exports.insertHotelDataController = async (req, res) => {
  try {
    const { hotels } = req.body;

    // Check if 'hotels' is an array
    if (!Array.isArray(hotels)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    // Find existing hotels by matching hotel_name
    const existingHotels = await Hotel.find({
      hotel_name: { $in: hotels.map((hotel) => hotel.hotel_name) },
    });
    const existingHotelNames = existingHotels.map((hotel) => hotel.hotel_name);

    // Filter out hotels that already exist
    const newHotels = hotels.filter(
      (hotel) => !existingHotelNames.includes(hotel.hotel_name)
    );

    // If there are no new hotels to add
    if (newHotels.length === 0) {
      return res.status(200).json({ message: "No new hotels to add" });
    }

    // Map new hotels to the schema format
    const hotelDocuments = newHotels.map((hotel) => ({
      hotel_name: hotel.hotel_name,
      hotel_price: hotel.hotel_price,
      services: hotel.services || "", // Handle missing services
      full_address: hotel.full_address || "Address not provided", // Update field name
      contact: hotel.contact || 0, // New field: contact, set default to 0 if missing
      city: hotel.city || "", // New field: city
      state: hotel.state || "", // New field: state
      image_urls: hotel.image_urls || [], // Ensure image_urls is an array, fallback to empty array
    }));

    // Insert new hotel documents into the database
    const addedHotels = await Hotel.insertMany(hotelDocuments);

    // Return success response
    res.status(200).json({ message: "Hotels Added Successfully", addedHotels });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding hotels", error });
  }
};


exports.getController = async (req, res) => {
  try {
    const { state_name } = req.query;

    if (!state_name) {
      return res
        .status(400)
        .json({ message: "State name query parameter is required" });
    }

    const stateData = await State.findOne({ state_name });

    if (!stateData) {
      return res.status(404).json({ message: "State not found" });
    }

    const cities = await City.find({ state: state_name });
    const hotels = await Hotel.find({ state: state_name });

    res.status(200).json({
      message: "State data fetched successfully",
      stateData,
      cities,
      hotels,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching state data", error });
  }
};
