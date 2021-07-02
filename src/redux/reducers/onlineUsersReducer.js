import { SET_LIST_OF_USERS } from "../actions/action_types";

export default function onlineUsersReducer(state = [], action) {
    switch (action.type) {
        case SET_LIST_OF_USERS:
            return action.payload
        default:
            return state
    }
}