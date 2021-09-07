/* Import Libraries */
import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

/* Import Styling */
import { Typography } from '@material-ui/core';

/* Import Custom Components */

function UserPage() {
  const user = useSelector((store) => store.user);
  return (
    <>
      <section>
        <Typography variant="h1" component="h1">
          Avalanche
        </Typography>
        <Typography variant="h5" component="p">
          Welcome to New Brighton Mini Mites Avalanche team photo gallery.
          Please feel free to browse pictures from the team's games and
          practices and upload your own to share with the team. We are excited
          for an amazing season and all the fun we will have.
        </Typography>
        <Typography variant="h3" component="h2">
          Go Avalanche!!!
        </Typography>
      </section>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <LogOutButton className="btn" />
      </div>
    </>
  );
}

export default UserPage;
