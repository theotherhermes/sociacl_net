const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
            ]
        },
        profilePage: {
            posts: [
                { id: 1, message: "First post", likesCount: 10 },
                { id: 2, message: "Second post", likesCount: 12 },
            ],
            newPostText: "",
        }
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._sallSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._sallSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreation = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};

export default store;
window.store = store;