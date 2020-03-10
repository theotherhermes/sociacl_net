import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        <button onClick={onAddPost}>add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;