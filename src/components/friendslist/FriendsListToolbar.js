import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import AddFriend from 'src/components/friendslist/AddFriend.js';

const FriendsListToolbar = ({refreshFriends}) => {

  const refresh = () =>{
    refreshFriends();
  }

  return(<Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 0.25
      }}
    >
      <AddFriend refreshFriends={refresh}/>
    </Box>
    <Box sx={{ mt: 2 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search friends"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>)
};

export default FriendsListToolbar;
