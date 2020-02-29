import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>add post</button>
        </div>
      </div>
      <div>
        <Post message="First" />
        <Post message="Second" />
      </div>
      </div>
    ) 
};

export default MyPosts;