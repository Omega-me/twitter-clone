import React, { useContext } from 'react';
import './Sidebar.css';
import { PostContext } from '../../Context/PostContext';
import SidebarElement from './SidebarElement/SidebarElement';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  button: {
    marginTop: '15px',
    backgroundColor: '#1da1f2',
    borderRadius: '50px',
    color: 'white',
    textTransform: 'inherit',
    padding: '8px 15px',
    fontSize: '19px',
    '&:hover': {
      backgroundColor: '#178dd6',
    },
    '@media all and (max-width:768px)': {
      fontSize: '15px',
    },
  },
});

const Sidebar = () => {
  const classes = useStyle();
  const [postChecker, setPostChecker] = useContext(PostContext);

  return (
    <div className='sidebar'>
      <div className='sidebar__container'>
        <SidebarElement active Icon={TwitterIcon} />
        <SidebarElement active Icon={HomeRoundedIcon} text='Home' />
        <SidebarElement Icon={SearchRoundedIcon} text='Explore' />
        <SidebarElement
          Icon={NotificationsNoneOutlinedIcon}
          text='Notifications'
        />
        <SidebarElement Icon={EmailOutlinedIcon} text='Messages' />
        <SidebarElement Icon={BookmarkBorderOutlinedIcon} text='Bookmarks' />
        <SidebarElement Icon={FeaturedPlayListOutlinedIcon} text='Lists' />
        <SidebarElement Icon={PersonOutlinedIcon} text='Profile' />
        <SidebarElement Icon={MoreHorizOutlinedIcon} text='More' />
        <Button
          onClick={() => setPostChecker(!postChecker)}
          fullWidth
          variant='contained'
          className={classes.button}>
          Tweet
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
