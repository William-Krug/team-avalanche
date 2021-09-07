/* Import Libraries */
import React from 'react';

/* Import Styling */
import { Grid } from '@material-ui/core';

/* Import Custom Components */
import LoginForm from '../LoginForm/LoginForm';

/**
 *
 * @returns
 */
function LoginPage() {
  return (
    <Grid container justifyContent="center" class="landingPage">
      <Grid item xs={6}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}

export default LoginPage;
