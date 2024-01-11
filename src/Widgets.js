import React from 'react'
import "./Widgets.css"
import SearchIcon from '@mui/icons-material/Search';
import {TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton} from "react-twitter-embed"
const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <SearchIcon className='widgets_searchIcon'/>
        <input placeholder="Type to search" type="text"></input>
      </div>
      <div className='widgets_widgetContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1745317870681100469"}/>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="neelesh36"
          options={{ height: 400 }}
        />
        {/* <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        /> */}
      </div>
    </div>
  )
}

export default Widgets
