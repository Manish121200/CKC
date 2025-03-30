import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid, CircularProgress, Card, CardContent, CardMedia, Button } from "@mui/material";
import axios from "axios";

const AllCities = () => {
  const { stateName } = useParams();
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/getcities`);
        setCities(response.data.cities.filter(city => city.state.toLowerCase() === stateName.toLowerCase()));
      } catch (err) {
        setError("Error fetching cities");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, [stateName]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        All Cities in {stateName}
      </Typography>
      <Grid container spacing={4}>
        {cities.map(city => (
          <Grid item xs={12} sm={6} md={4} key={city._id}>
            <Card>
              <CardMedia
                component="img"
                image={city.image_urls[0]}
                alt={city.city_name}
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">{city.city_name}</Typography>
                <Typography>{city.city_description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllCities;
