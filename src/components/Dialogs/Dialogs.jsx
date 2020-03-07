import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( (d) => <DialogItem name={d.name} id={d.id}/>); 
    let messagesElements = state.messages.map( m  => <Message message={m.message} id={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}> 
                { dialogsElements }
            </div>
            <div className={classes.messagesItems}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} placeholder="enter your message" value={newMessageBody}/></div>
                    <div><button onClick={onSendMessageClick}>Send message</button></div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;