import React, { useEffect, useState } from 'react';
import Button from './Button';
import Card from '../Explore/Card';
import '../Explore/Explore.css';
import axios from 'axios'; // Import axios to make API calls

const Explore = () => {
  const [states, setStates] = useState([]);
  const BASE_URL = 'http://localhost:4000/api/v1'; // Update with your actual API URL

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getstates`); // Adjust the endpoint as needed
        setStates(response.data.states || []);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates(); // Call the function to fetch states
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="explore-container">
      <div className="explore-title-cities">
        <h1>Explore Popular Cities of Gujarat</h1>
        <p>Discover the timeless beauty of Gujarat’s most iconic cities with our curated travel guide.</p>
      </div>

      <div className="cities">
        <Button />
      </div>

      <div className="explore-states">
        <h1>Explore All States of India</h1>
        <div className="states-scroll-container">
          <div className="states-div">
            {states.map(({ _id, image_urls, state_name }) => (
              <Card
                key={_id}
                state_name={state_name} // Pass the state name
                image_urls={image_urls} // Pass the image URL
              />
            ))}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Explore;
