import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    { id: 1, message: "First post", likesCount: 10 },
    { id: 2, message: "Second post", likesCount: 12 }
  ]
  let postsElements = posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);

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
        { postsElements }
      </div>
    </div>
  )
};

export default MyPosts;