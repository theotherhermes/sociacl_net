import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);
  let newPostElement = React.createRef();
  let addPost = () => { 
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div>

      <div>
        My posts
        <div>
          <textarea ref={newPostElement}></textarea>
          <button onClick={addPost}>add post</button>
        </div>
      </div> 
      <div>
        { postsElements }
      </div>
    </div>
  )
};

export default MyPosts;