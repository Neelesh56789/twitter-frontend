import React , {useEffect, useState} from 'react'
import db from './firebase'
import "./Feed.css"
import Tweetbox from './Tweetbox'
import Post from './Post'
import FlipMove from 'react-flip-move';

const Feed = () => {

    const [posts, setPosts] = useState([]);
     useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc=> doc.data()))
        ))
     }, [])
  return (
    <div className='feed'>
      {/* Header */}
      <div className='feed_header'>
        <h1>Home</h1>
      </div>
      <Tweetbox />
      <FlipMove>
      {posts.map((post)=>(
        <Post 
        key = {post.text}
        displayName = {post.displayName}
        userName = {post.userName}
        avatar = {post.avatar}
        verified = {post.verified}
        text = {post.text}
        image = {post.image}
      />
      ))}
      </FlipMove>
      
      
    </div>
  )
}

export default Feed
