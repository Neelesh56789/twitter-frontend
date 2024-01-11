import React, {forwardRef} from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


const Post = forwardRef(({displayName, userName, verified, text, image, avatar}, ref) => {
  return (
    <div className='post' ref = {ref}>
        <div className='post_avatar'>
            <Avatar src={avatar}></Avatar>
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headerText'>
                    <h3>{displayName} {""}
                        <span className='post_headerSpecial'>
                          {verified && <VerifiedIcon className='post_badge'/>}@{userName}
                        </span>
                    </h3>
                    
                </div>
                <div className='headerDescription'>
                    <p>{text}</p>
                </div>

            </div>
            <div className='posted_image'>
                <img src={image}></img>
            </div>
            <div className='post_footer'>
                <ChatBubbleOutlineOutlinedIcon />
                <RepeatIcon />
                <FavoriteBorderIcon />
                <PublishIcon />

            </div>
        </div>
    </div>
  )
})

export default Post
