import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
      <div className={classes.content}>
      {/* <div>
        <img className={classes.img1} src="https://publish.uic.edu/wp-content/uploads/2014/01/MS13_10_31_1301.jpg" />
      </div> */}
      <div>
        <img className={classes.img2} src="https://www.w3schools.com/w3css/img_avatar3.png"/>
        ava + disct
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
      </div>
      <div>
        <div>Post1</div>
        <div>Post2</div>
      </div>
    </div>
    )
};

export default Profile;