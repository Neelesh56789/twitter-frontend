import { Avatar, Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import "./Tweetbox.css"
import db from './firebase'

const Tweetbox = () => {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const fileInputRef = useRef(null);

    const handleImageChange = (e) =>{
        if(e.target.files[0]){
            const imageURL = URL.createObjectURL(e.target.files[0]);
            setTweetImage(imageURL)
        }
        
    }

    const sendTweet =(e) =>{
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Neelesh Tiwari",
            userName: "neelesh36",
            verified: false,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fpng-avatars&psig=AOvVaw1cjszhvZTeBs5PJVsbzHUx&ust=1704879299337000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODLxbyA0IMDFQAAAAAdAAAAABAE"
        })

        setTweetMessage("");
        setTweetImage("");

        // Reset the file input
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }

  return (
    <div className='tweetbox'>
    <form>
    <div className='tweetbox_input'>
      <Avatar src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fpng-avatars&psig=AOvVaw1cjszhvZTeBs5PJVsbzHUx&ust=1704879299337000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODLxbyA0IMDFQAAAAAdAAAAABAE'></Avatar>
      <input  placeholder='What is happening?'value = {tweetMessage} onChange = {(e)=>setTweetMessage(e.target.value)} ></input>
    </div>
    
    <div className='tweetImage_optional'>
        <input ref = {fileInputRef} onChange={handleImageChange} type="file"></input>
    </div>
    
      <Button onClick = {sendTweet} className='tweetbox_button'>Tweet</Button>
    </form>
    </div>
    
  )
}

export default Tweetbox
