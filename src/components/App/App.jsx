/* Import Libraries */
import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

/* Import Styling */
import './App.css';

/* Import Components */
import AvalancheLava from '../AvalancheLava/AvalancheLava';
import AvalancheMustangs from '../AvalancheMustangs/AvalancheMustangs';
import BanditsAvalanche from '../BanditsAvalanche/BanditsAvalanche';
import Footer from '../Footer/Footer';
import KnightsAvalanche from '../KnightsAvalanche/KnightsAvalanche';
import LandingPage from '../LandingPage/LandingPage';
import Nav from '../Nav/Nav';
import PiratesAvalanche from '../PiratesAvalanche/PiratesAvalanche';
import PracticesMisc from '../PracticesMisc/PracticesMisc';
import RapidsAvalanche from '../RapidsAvalanche/RapidsAvalanche';
import UserPage from '../UserPage/UserPage';
// import LoginPage from '../LoginPage/LoginPage';
// import RegisterPage from '../RegisterPage/RegisterPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Landing Page */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LandingPage at "/home"
            exact
            path="/home"
            authRedirect="/user"
          >
            <LandingPage />
          </ProtectedRoute>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          {/* Practices / Misc */}
          <ProtectedRoute exact path="/practices_misc">
            <PracticesMisc />
          </ProtectedRoute>

          {/* Avalanche / Lava */}
          <ProtectedRoute exact path="/avalanche_lava">
            <AvalancheLava />
          </ProtectedRoute>

          {/* Knights / Avalanche */}
          <ProtectedRoute exact path="/knights_avalanche">
            <KnightsAvalanche />
          </ProtectedRoute>

          {/* Bandits / Avalanche */}
          <ProtectedRoute exact path="/bandits_avalanche">
            <BanditsAvalanche />
          </ProtectedRoute>

          {/* Pirates / Avalanche */}
          <ProtectedRoute exact path="/pirates_avalanche">
            <PiratesAvalanche />
          </ProtectedRoute>

          {/* Avalanche / Mustangs */}
          <ProtectedRoute exact path="/avalanche_mustangs">
            <AvalancheMustangs />
          </ProtectedRoute>

          {/* Rapids / Avalanche */}
          <ProtectedRoute exact path="/rapids_avalanche">
            <RapidsAvalanche />
          </ProtectedRoute>

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          {/* <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login
            exact
            path="/login"
            authRedirect="/user"
          >
            <LoginPage />
          </ProtectedRoute> */}

          {/* <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            authRedirect="/user"
          >
            <RegisterPage />
          </ProtectedRoute> */}

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
