

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Grid, CircularProgress, CardMedia, Button, Card, CardContent, CardActions, Box } from "@mui/material";
import axios from "axios";

const StateDetail = () => {
  const { stateName } = useParams();
  const BASE_URL = "http://localhost:4000/api/v1";
  const [state, setState] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate(); // React Router navigation hook

  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getstates`);
        const foundState = response.data.states.find(
          (s) => s.state_name.toLowerCase() === stateName.toLowerCase()
        );
        setState(foundState);
      } catch (err) {
        setError("Error fetching state");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchHotels = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/gethotels`);
        setHotels(response.data.hotels || []);
      } catch (err) {
        setError("Error fetching hotels");
        console.error(err);
      }
    };

    const fetchCities = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getcities`);
        setCities(response.data.cities || []);
      } catch (err) {
        setError("Error fetching cities");
        console.error(err);
      }
    };

    fetchState();
    fetchHotels();
    fetchCities();
  }, [stateName]);

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const handleExploreCities = () => {
    navigate(`/allcities/${stateName}`); // Redirect to All Cities page
  };

  const handleExploreHotels = () => {
    navigate(`/allhotels/${stateName}`); // Redirect to All Hotels page
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!state) return <Typography>No state found</Typography>;

  return (
    <Container sx={{ m: 15 }}>
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={state.image_urls[0]}
            alt={state.state_name}
            sx={{
              height: "auto",
              width: "100%",
              maxHeight: 400,
              borderRadius: 2,
              objectFit: "contain",
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

      {/* // Popular Hotels Section */}
<Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: 8 }}>
  <Typography variant="h4" gutterBottom>
    Popular Hotels In {state.state_name}
  </Typography>
  <Button onClick={handleExploreHotels} variant="contained" color="primary">
    Explore More
  </Button>
</Box>

<Grid container spacing={4}>
  {hotels
    .filter((hotel) => hotel.state && hotel.state.toLowerCase() === state.state_name.toLowerCase())
    .slice(0, 3) // Limit to 3 hotels
    .map((hotel) => (
      <Grid item xs={12} sm={6} md={4} key={hotel._id}>
        <Card sx={{ borderRadius: 3 }}>
          <CardMedia
            component="img"
            image={hotel.image_urls[0]}
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

{/* // Popular Cities Section */}
<Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginTop: 8 }}>
  <Typography variant="h4" gutterBottom>
    Popular Cities In {state.state_name}
  </Typography>
  <Button onClick={handleExploreCities} variant="contained" color="primary">
    Explore More
  </Button>
</Box>

<Grid container spacing={4}>
  {cities
    .filter((city) => city.state && city.state.toLowerCase() === state.state_name.toLowerCase())
    .slice(0, 3) // Limit to 3 cities
    .map((city) => (
      <Grid item xs={12} sm={6} md={4} key={city._id}>
        <Card sx={{ borderRadius: 3 }}>
          <CardMedia
            component="img"
            image={city.image_urls[0]}
            alt={city.city_name}
            sx={{ height: 200, objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {city.city_name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {truncateText(city.city_description, 20)} {/* Limiting description to 20 words */}
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
