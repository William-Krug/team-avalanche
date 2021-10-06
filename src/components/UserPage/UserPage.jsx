/* Import Libraries */
import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

/* Import Styling */
import { Box, Typography } from '@material-ui/core';

/* Import Custom Components */

function UserPage() {
  const user = useSelector((store) => store.user);
  return (
    <Box>
      <Box className="welcome">
        <Typography variant="h5" component="p">
          Welcome to New Brighton Mini Mites Avalanche team photo gallery.
          Please feel free to browse pictures from the team's games and
          practices and upload your own to share with the team. We are excited
          for an amazing season and all the fun we will have.
        </Typography>
      </Box>
      <Box className="centered">
        <Typography variant="h2" component="h1">
          Go Avalanche!!!
        </Typography>
      </Box>
      <div className="container">
        <LogOutButton className="btn" />
      </div>
    </Box>
  );
}

export default UserPage;
