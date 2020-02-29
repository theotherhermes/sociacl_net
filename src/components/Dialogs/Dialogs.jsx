import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/messages/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.textMessage}
        </div>
    )
};

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}> 
                <DialogItem name="Dima" id="1" />
                <DialogItem name="Pasha" id="2" />
            </div>
            <div className={classes.messagesItems}>
                <Message textMessage="privet" />
            </div>
        </div>
    )
};

export default Dialogs;