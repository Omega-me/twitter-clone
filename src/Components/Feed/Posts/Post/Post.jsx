import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

const Post = ({
  avatarUrlPhoto,
  displayName,
  username,
  isVerified,
  caption,
  photoUrl,
  timePostedForDisplay,
}) => {
  return (
    <div className='post'>
      <div className='post__wrapper'>
        <Avatar
          style={{
            width: '50px',
            height: '50px',
          }}
          src={avatarUrlPhoto}
          alt={displayName}
        />
        <div className='post__block'>
          <div className='post__container'>
            <div className='post__info'>
              <h3>
                {displayName}
                {isVerified === 0 && (
                  <VerifiedUserIcon
                    style={{
                      color: '#1da1f2',
                      fontSize: '18px',
                      marginLeft: '5px',
                    }}
                  />
                )}
              </h3>
              <p>
                @{username} <span>· {timePostedForDisplay}</span>
              </p>
            </div>
            <IconButton className='post__moreButton'>
              <MoreHorizIcon />
            </IconButton>
          </div>
          <div className='post__caption'>{caption}</div>
        </div>
      </div>
      <div className='post__image'>
        <img src={photoUrl} alt='' />
        <div className='post__buttons'>
          <div className='post__butt'>
            <IconButton className='post__button--modifier1'>
              <ChatBubbleOutlineOutlinedIcon />
            </IconButton>
            <p>{Math.floor(Math.random(10) * 500)}</p>
          </div>
          <div className='post__butt'>
            <IconButton className='post__button--modifier2'>
              <RepeatRoundedIcon />
            </IconButton>
            <p>{Math.floor(Math.random(10) * 500)}</p>
          </div>
          <div className='post__butt'>
            <IconButton className='post__button--modifier3'>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <p>{Math.floor(Math.random(10) * 500)}</p>
          </div>
          <div className='post__butt'>
            <IconButton className='post__button--modifier4'>
              <ShareOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
