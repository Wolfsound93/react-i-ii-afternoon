import React, { Component } from 'react';
import '../components/styles/Card.css';

class Card extends React.Component {
  render() {
    let {
      firstName,
      lastName,
      city,
      country,
      employer,
      title,
      favoriteMovies
    } = this.props;
    return (
      <div className='card-box'>
        <h1>{firstName + ' ' + lastName}</h1>
        <h2>from: {city + ', ' + country}</h2>
        <h2>Job Title: {title}</h2>
        <h2>employer: {employer}</h2>
        <h2>Favorite Movies:</h2>
        <ul>
          <li>{favoriteMovies[0]}</li>
          <li>{favoriteMovies[1]}</li>
          <li>{favoriteMovies[2]}</li>
        </ul>
      </div>
    );
  }
}
export default Card;
