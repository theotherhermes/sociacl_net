const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Pasha" },
    ],
    messages: [
        { id: 1, message: "Privet" },
        { id: 2, message: "Paka" },
    ],
    newMessageBody: ""
};

export const dialogsReducer = (state=initialState, action) => {

    let stateCopy = {...state};

    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }; 
};
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    };
};
export default dialogsReducer;