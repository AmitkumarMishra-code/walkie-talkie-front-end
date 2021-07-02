import { SET_LIST_OF_USERS, SET_USER } from "./action_types";


export let socketListeners = (socket) => {
    return async(dispatch) => {

        socket.on('connect', () => {
            console.log('connected')
        })


        socket.on('list', (list) => {
            console.log(list)
            let usersList = list.filter(user => user.id !== socket.id)
            dispatch({
                type: SET_LIST_OF_USERS,
                payload: usersList
            })
        })

    }
}

export let setUser = (username) => ({
    type: SET_USER,
    payload: username
})