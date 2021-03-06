const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: "First post", likesCount: 10 },
        { id: 2, message: "Second post", likesCount: 12 },
    ],
    newPostText: "",
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy; }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy; }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreation = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};
export default profileReducer;
