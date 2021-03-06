import React from 'react';
import axios from 'axios';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
    Typography,
    IconButton,
    Popover,
    List,
    ListItem,
} from '@material-ui/core';

export default function FriendOptions({friendsUserId, refreshFriends}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const loggedInUser= sessionStorage.getItem('encodedUserId');

  // Clicking on the 3 dots
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Closing the popover menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleRemove = () => {
    //TODO: 
    // 1. Populate FL with 'pending status' until friend responds (accept/decline)
    if(loggedInUser != null) {
      const friend = encodeURIComponent(friendsUserId);

      const friendRequestUri = '/friends/' + loggedInUser + '/remove/' + friend;

      axios.put(friendRequestUri)
      .then(response => {
        if(response.status === 200) {
          alert("Friend removed");
          refreshFriends();
        } 
        else {
          alert("Cannot find user with id:" + friendsUserId);
        }
      })
      .catch(error => {
        console.log(error);
      });
    } else {
      alert('cannot locate userId');
    }
  }

  return (
    <div>
        <IconButton onClick = {handleClick}>
        <MoreVertIcon />
        </IconButton>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      > 
        {/* List of more options for specific friend */}
        <List>
            {/* Add more list items for more friend options */}
            <ListItem button onClick={handleRemove}>
                <Typography>Remove Friend</Typography>
            </ListItem>
        </List>
        
      </Popover>
    </div>
  );
}