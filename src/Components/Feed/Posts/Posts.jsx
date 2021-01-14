import React, { useState, useEffect } from 'react';
import './Posts.css';
import Home from './Home/Home';
import PostForm from './PostForm/PostForm';
import Post from './Post/Post';
import db from '../../../libs/firebase';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timePosted', 'desc')
      .onSnapshot(snapshot => {
        // console.log(snapshot.docs.map(doc => doc.data().username));
        setPosts(
          snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className='posts'>
      <Home />
      <PostForm />

      {posts.map(({ post, id }) => (
        <Post
          key={id}
          avatarUrlPhoto={post.avatarUrlPhoto}
          displayName={post.displayName}
          username={post.username}
          isVerified={post.isVerified}
          caption={post.caption}
          photoUrl={post.photoUrl}
          timePostedForDisplay={post.timePostedForDisplay}
        />
      ))}
    </div>
  );
};

export default Posts;
