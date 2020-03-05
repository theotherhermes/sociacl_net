import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( (d) => <DialogItem name={d.name} id={d.id}/>); 
    let messagesElements = props.state.messages.map( m  => <Message message={m.message} id={m.id}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}> 
                { dialogsElements }
            </div>
            <div className={classes.messagesItems}>
                { messagesElements }
            </div>
        </div>
    )
};

export default Dialogs;