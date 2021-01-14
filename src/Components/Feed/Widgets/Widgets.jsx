import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
} from 'react-twitter-embed';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widget__constainer'>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='merxira'
          options={{ height: 650 }}
        />
        <div className='widgets__buttons'>
          <TwitterShareButton
            url={'https://www.linkedin.com/in/olken-merxira-9616b9192/'}
            options={{ text: 'we love #reactjs ', via: 'merxira' }}
          />
          <TwitterMentionButton screenName={'merxira'} />
          <TwitterHashtagButton tag={'merxira'} />
          <TwitterFollowButton screenName={'merxira'} />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
