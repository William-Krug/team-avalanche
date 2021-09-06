/* Import Libraries */
import React from 'react';

/* Import Styling */
import './LandingPage.css';
import { Grid } from '@material-ui/core';

/* Import Components */
import LoginForm from '../LoginForm/LoginForm';

/**
 *
 * @returns
 */
function LandingPage() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
