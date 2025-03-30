import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get URL parameters
import { Container, Typography, Grid, CircularProgress, CardMedia, Button, Card, CardContent, CardActions } from "@mui/material";
import axios from "axios";

const StateDetail = () => {
  const { stateName } = useParams(); // Get the state name from URL parameters
  const BASE_URL = "http://localhost:4000/api/v1"; // Set your API base URL
  const [state, setState] = useState(null); // State to hold fetched state
  const [hotels, setHotels] = useState([]); // State to hold fetched hotels
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch state and hotels from the API
  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getstates`); // Fetch all states
        const foundState = response.data.states.find(s => s.state_name.toLowerCase() === stateName.toLowerCase()); // Match the state name
        setState(foundState); // Set the matched state
      } catch (err) {
        setError("Error fetching state"); // Set error message
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    const fetchHotels = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/gethotels`); // Fetch hotels
        setHotels(response.data.hotels || []); // Update hotels
      } catch (err) {
        setError("Error fetching hotels"); // Set error message
        console.error(err);
      }
    };

    fetchState(); // Call fetch state function
    fetchHotels(); // Call fetch hotels
  }, [stateName]); // Dependency on stateName to refetch when it changes

  if (loading) return <CircularProgress />; // Show loading spinner
  if (error) return <Typography color="error">{error}</Typography>; // Show error message
  if (!state) return <Typography>No state found</Typography>; // If no state found

  return (
    <Container sx={{ m: 15 }}>
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {/* Image and state description */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={state.image_urls[0]} // Assuming 'state_image' is the key for the image URL
            alt={state.state_name}
            sx={{
              height: "auto",
              width: "100%",
              maxHeight: 400,
              borderRadius: 2,
              objectFit: "contain"
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            {state.state_name}: Embrace the Regal Splendor
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            <span style={{ marginRight: 8 }}>📍</span>India
          </Typography>
          <Typography variant="body1">{state.long_description}</Typography>
        </Grid>
      </Grid>

      {/* Popular Hotels Section */}
      <Typography variant="h4" sx={{ marginTop: 8 }} gutterBottom>
        Popular Hotels In {state.state_name}
      </Typography>

      <Grid container spacing={4}>
        {hotels
          .filter((hotel) => hotel.state && hotel.state === state.state_name) // Directly match state_name with hotel.state
          .map((hotel) => (
            <Grid item xs={12} sm={6} md={4} key={hotel._id}>
              <Card sx={{ borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  image={hotel.image_urls[0]} // Assuming 'image_urls' holds an array of images
                  alt={hotel.hotel_name}
                  sx={{ height: 200, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {hotel.hotel_name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Fully refundable
                  </Typography>
                  <Typography variant="body2" color="green">
                    Rs. {hotel.hotel_price} per night
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default StateDetail;
