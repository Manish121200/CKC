import React from 'react';
import '../Explore/Card.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
    return (
        <Link to={`/state/${props.state_name}`} className="img-card"> {/* Update the route with state name */}
            <img src={props.image_urls[0]} alt={props.state_name} className="states-img" /> {/* Updated image source */}
            <h2 className="states-name">{props.state_name}</h2> {/* Updated state name */}
        </Link>
    );
}
