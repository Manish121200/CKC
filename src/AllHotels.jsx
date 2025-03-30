import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid, CircularProgress, Card, CardContent, CardMedia, Button } from "@mui/material";
import axios from "axios";

const AllHotels = () => {
  const { stateName } = useParams();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/gethotels`);
        // Filter hotels where state exists and matches the stateName
        setHotels(
          response.data.hotels.filter(
            hotel => hotel.state && hotel.state.toLowerCase() === stateName.toLowerCase()
          )
        );
      } catch (err) {
        setError("Error fetching hotels");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, [stateName]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        All Hotels in {stateName}
      </Typography>
      <Grid container spacing={4}>
        {hotels.map(hotel => (
          <Grid item xs={12} sm={6} md={4} key={hotel._id}>
            <Card>
              <CardMedia
                component="img"
                image={hotel.image_urls[0]}
                alt={hotel.hotel_name}
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">{hotel.hotel_name}</Typography>
                <Typography>Price: Rs. {hotel.hotel_price} per night</Typography>
              </CardContent>
              <Button size="small" color="primary">
                Book Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllHotels;
