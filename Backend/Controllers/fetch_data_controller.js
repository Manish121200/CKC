  const State = require('../Models/state_schema');
  const City = require('../Models/city_schema');
  const Hotel = require('../Models/hotel_schema');
  const Restaurant = require('../Models/restaurants_schema');

  // Fetch all hotels
  exports.getAllHotelsController = async (req, res) => {
    try {
      // Fetch all hotels from the database
      const hotels = await Hotel.find();

      res.status(200).json({ message: "Hotels fetched successfully", hotels });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching hotels", error });
    }
  };

  // Fetch all restaurants
exports.getAllRestaurantCollector = async (req, res) => {
  try {
    // Fetch all restaurants from the database
    const restaurants = await Restaurant.find();

    res.status(200).json({ message: "Restaurants fetched successfully", restaurants });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching restaurants", error });
  }
};


  // Fetch all cities
  exports.getAllCitiesController = async (req, res) => {
      try {
        // Fetch all cities from the database
        const cities = await City.find();
    
        res.status(200).json({ message: "Cities fetched successfully", cities });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching cities", error });
      }
    };


    // Fetch all states
  exports.getAllStatesController = async (req, res) => {
      try {
        // Fetch all states from the database
        const states = await State.find();
    
        res.status(200).json({ message: "States fetched successfully", states });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching states", error });
      }
    };







  // Fetch cities by state
  exports.getCitiesByStateController = async (req, res) => {
    try {
      const { state_name } = req.query;

      // Validate query parameter
      if (!state_name) {
        return res.status(400).json({ message: "State name must be provided" });
      }

      // Fetch cities that match the state name
      const cities = await City.find({ state: state_name });

      res.status(200).json({ message: "Cities fetched successfully", cities });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching cities", error });
    }
  };




  // Fetch hotels by minimum rating
  exports.getHotelsByMinRatingController = async (req, res) => {
    try {
      const { minRating } = req.query;

      // Validate query parameter
      if (minRating === undefined) {
        return res.status(400).json({ message: "minRating must be provided" });
      }

      // Fetch hotels with rating greater than or equal to minRating
      const hotels = await Hotel.find({ hotel_review: { $gte: Number(minRating) } });

      res.status(200).json({ message: "Hotels fetched successfully", hotels });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching hotels", error });
    }
  };





  // Fetch hotels by price range (minPrice or maxPrice or both)
  exports.getHotelsByPriceRangeController = async (req, res) => {
    try {
      const { minPrice, maxPrice } = req.query;

      // Build query object
      let query = {};

      if (minPrice !== undefined) {
        query.hotel_price = { ...query.hotel_price, $gte: Number(minPrice) };
      }
      if (maxPrice !== undefined) {
        query.hotel_price = { ...query.hotel_price, $lte: Number(maxPrice) };
      }

      // Fetch hotels based on the query
      const hotels = await Hotel.find(query);

      res.status(200).json({ message: "Hotels fetched successfully", hotels });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching hotels", error });
    }
  };




  // // Fetch hotels by state, city, and optional price range
  // exports.getHotelsByStateCityAndPriceController = async (req, res) => {
  //   try {
  //     const { state, city, minPrice, maxPrice } = req.query;

  //     // Ensure state and city are provided
  //     if (!state || !city) {
  //       return res.status(400).json({ message: "Both state and city are required" });
  //     }

  //     // Build query object for hotels
  //     let query = {
  //       state,
  //       city
  //     };

  //     // Add price range if provided
  //     if (minPrice !== undefined) {
  //       query.hotel_price = { ...query.hotel_price, $gte: Number(minPrice) };
  //     }
  //     if (maxPrice !== undefined) {
  //       query.hotel_price = { ...query.hotel_price, $lte: Number(maxPrice) };
  //     }

  //     // Fetch hotels based on the query
  //     const hotels = await Hotel.find(query);

  //     res.status(200).json({ message: "Hotels fetched successfully", hotels });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json({ message: "Error fetching hotels", error });
  //   }
  // };

  // Fetch hotels by optional state, city, and optional rating and price range
  exports.getHotelsByStateCityAndRatingAndPriceController = async (req, res) => {
    try {
      const { state, city, minPrice, maxPrice, minRating } = req.query;

      // Build query object for hotels
      let query = {};

      // Add state and city if provided
      if (state) {
        query.state = state;
      }
      if (city) {
        query.city = city;
      }

      // Add price range if provided
      if (minPrice !== undefined) {
        query.hotel_price = { ...query.hotel_price, $gte: Number(minPrice) };
      }
      if (maxPrice !== undefined) {
        query.hotel_price = { ...query.hotel_price, $lte: Number(maxPrice) };
      }

      // Add minimum rating if provided
      if (minRating !== undefined) {
        query.hotel_review = { ...query.hotel_review, $gte: Number(minRating) };
      }

      // Fetch hotels based on the query
      const hotels = await Hotel.find(query);

      res.status(200).json({ message: "Hotels fetched successfully", hotels });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching hotels", error });
    }
  };