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
            {props.message}
        </div>
    )
};

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Pasha"}
    ]
    let messages = [
        {id: 1, message: "Privet"},
        {id: 2, message: "Paka"}
    ]

    let dialogsElements = dialogs.map( (d) => <DialogItem name={d.name} id={d.id}/>); 
    let messagesElements = messages.map( m => <Message message={m.message} id={m.id}/>);

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