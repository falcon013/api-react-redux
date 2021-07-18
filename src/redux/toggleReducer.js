import {TOGGLE_MESSAGE} from "./actionsTypes";

const initialState = {
    messageVisibility: false,
};
const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MESSAGE:
            return {
                ...state,
                messageVisibility: !state.messageVisibility
            }
        default:
            return state;
    }
}
export default toggleReducer

