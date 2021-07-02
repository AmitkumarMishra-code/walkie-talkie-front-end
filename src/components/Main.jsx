import { useEffect } from "react"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { io } from "socket.io-client"
import { setUser, socketListeners } from "../redux/actions/actions"
const socket = io("ws://localhost:4000")




export default function Main() {
    const inputRef = useRef()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const onlineUsers = useSelector(state => state.onlineUsers)

    useEffect(() => {
        let newUser = prompt('Please Enter a username: ')
        dispatch(setUser(newUser))
        socket.emit("username", newUser)
        dispatch(socketListeners(socket))
    }, [])

    

    let clickHandler = async () => {
        // await socket.send(inputRef.current.value)
        // inputRef.current.value = ""
    }


    return (
        <div className="container">
            <h2>{user}</h2>
            <input type="text" placeholder='send a message to be bounced by the server' ref={inputRef} />
            <button className="send" onClick={clickHandler}>Send</button>
            <div className="connected-users">
                <h1>Connected Users</h1>
                {onlineUsers.length > 0 && onlineUsers.map(user => <p>{user.username}</p>)}
            </div>
        </div>
    )
}