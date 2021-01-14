import React from 'react';
import './Feed.css';
import Posts from './Posts/Posts';
import Widgets from './Widgets/Widgets';

const Feed = () => {
  return (
    <div className='feed'>
      <Posts />
      <Widgets />
    </div>
  );
};

export default Feed;
