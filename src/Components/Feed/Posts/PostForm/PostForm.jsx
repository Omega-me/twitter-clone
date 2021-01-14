import React, { useState, useContext } from 'react';
import './PostForm.css';
import { PostContext } from '../../../../Context/PostContext';
import { Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import db from '../../../../libs/firebase';
import moment from 'moment';

const useStyle = makeStyles({
  button: {
    color: 'white',
    textTransform: 'inherit',
    fontWeight: '600',
    backgroundColor: ' #1da1f2',
    borderRadius: '50px',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#1b8fd6',
    },
  },
  avatar: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
});

const PostForm = () => {
  const [postChecker, setPostChecker] = useContext(PostContext);
  const classes = useStyle();
  const [input, setInput] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [profilUrl, setProfilUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handlePost = e => {
    e.preventDefault();
    db.collection('posts')
      .add({
        avatarUrlPhoto: profilUrl,
        displayName: displayName,
        username: username,
        isVerified: Math.floor(Math.random(0) * 1),
        caption: input,
        photoUrl: imageUrl,
        timePostedForDisplay: moment().format('MMM Do YY'),
        timePosted: moment().format(),
      })
      .then(() => alert('posted'))
      .catch(error => console.log(error));

    setInput('');
    setDisplayName('');
    setUsername('');
    setProfilUrl('');
    setImageUrl('');
  };

  return (
    <form
      onSubmit={handlePost}
      className={!postChecker ? 'postForm--modifier' : 'postForm'}>
      <div className='postForm__input'>
        <Avatar className={classes.avatar} src='...' alt='Olken' />
        <input
          onChange={e => setInput(e.target.value)}
          value={input}
          type='tex'
          placeholder={`What's happening?`}
          required
        />
      </div>
      <div className='postForm__userInfo'>
        <input
          onChange={e => setDisplayName(e.target.value)}
          value={displayName}
          type='tex'
          placeholder={`Display Name`}
          required
        />
        <input
          onChange={e => setUsername(e.target.value)}
          value={username}
          type='tex'
          placeholder={`Username`}
          required
        />
        <input
          onChange={e => setProfilUrl(e.target.value)}
          value={profilUrl}
          type='tex'
          placeholder={`Profil Photo url (optional)`}
        />
      </div>

      <div className='postForm__submit'>
        <input
          onChange={e => setImageUrl(e.target.value)}
          value={imageUrl}
          type='text'
          placeholder='Image url (optional)'
        />
        <Button type='submit' variant='contained' className={classes.button}>
          Tweet
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
