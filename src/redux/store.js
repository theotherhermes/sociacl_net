import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dima" },
                { id: 2, name: "Pasha" },
            ],
            messages: [
                { id: 1, message: "Privet" },
                { id: 2, message: "Paka" },
            ],
            newMessageBody: ""
        },
        profilePage: {
            posts: [
                { id: 1, message: "First post", likesCount: 10 },
                { id: 2, message: "Second post", likesCount: 12 },
            ],
            newPostText: "",
        },
        sidebar: {},
    },
    _sallSubscriber() {
        console.log("State ch.")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._sallSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._sallSubscriber(this._state);
    }
};

export default store;
window.store = store;