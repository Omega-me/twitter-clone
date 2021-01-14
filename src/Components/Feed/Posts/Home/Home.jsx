import React from 'react';
import './Home.css';
import { IconButton } from '@material-ui/core';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Home = () => {
  return (
    <div className='home'>
      <h3>Home</h3>

      <IconButton className='home__button'>
        <StarHalfIcon />
      </IconButton>
    </div>
  );
};

export default Home;
