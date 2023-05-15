import { useState } from "react";
import { postTweet } from "./store/tweet";
import { useDispatch } from "react-redux";

function CreateTweet () {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const submitHandler = () => {
        const obj = {
            message
        }

        if(obj.message) {
            dispatch(postTweet(obj));
        }

        setMessage('')
    }

    return (
        <>
            <label htmlFor="newTweet">New Tweet</label>
            <input
                type="text"
                name='message'
                id="newTweet"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></input>
            <button
                onClick={submitHandler}
            >
                Post Tweet
            </button>
        </>

    )
}

export default CreateTweet;