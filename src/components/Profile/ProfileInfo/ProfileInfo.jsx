import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img className={classes.img2} src="https://www.w3schools.com/w3css/img_avatar3.png"/>
        </div>
        <div>
          Rinat Lu
        </div>
      </div>
    )
};

export default ProfileInfo;