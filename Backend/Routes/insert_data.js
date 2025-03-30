const express = require('express');
const router = express.Router();
const {
  insertStateDataController,
  insertCityDataController,
  insertHotelDataController,
  insertRestaurantDataCollector,
} = require('../Controllers/insert_data_conroller');

router.post('/addstate', insertStateDataController);
router.post('/addcity', insertCityDataController);
router.post('/addhotel', insertHotelDataController);
router.post('/addrestaurant',insertRestaurantDataCollector)

module.exports = router;
