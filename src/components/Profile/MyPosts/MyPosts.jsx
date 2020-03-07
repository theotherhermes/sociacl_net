import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextCreation} from "./../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextCreation(text));
  };

  return (
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        <button onClick={addPost}>add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;