import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from '@mui/material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar_twitterIcon' />
      <SidebarOption active Icon = {HomeIcon} text="Home"/>
      <SidebarOption Icon = {SearchIcon} text="Explore"/>
      <SidebarOption Icon = {NotificationsOutlinedIcon} text="Notifications"/>
      <SidebarOption Icon = {MailOutlinedIcon} text="Messages"/>
      <SidebarOption Icon = {FeaturedPlayListOutlinedIcon} text="Lists"/>
      <SidebarOption Icon = {PeopleOutlinedIcon} text="Communities"/>
      <SidebarOption Icon = {Person3OutlinedIcon} text="User"/>
      <SidebarOption Icon = {MoreHorizOutlinedIcon} text="More"/>

      <Button variant='outlined' className='sidebar_tweet' fullWidth>Tweet</Button>  
    </div>
    
  )
}

export default Sidebar
