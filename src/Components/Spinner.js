import React, { Component } from 'react';
import loading from './Skateboarding.gif';
import './Spinner.css'; // Import a separate CSS file for styling

export default class Spinner extends Component {
  render() {
    return (
      <div className='spinner-container'>
        <img className='spinner-image' src={loading} alt='loading' />
      </div>
    );
  }
}
