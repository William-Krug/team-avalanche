/* Import Libraries */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

/* Import Styling */
import './Nav.css';
import { Grid, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

/* Import Custom Components */
import { navList } from './NavList';

/**
 *
 * @returns
 */
function Nav() {
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index, url) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    history.push(url);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {user.id && (
        <Grid container>
          <Grid item xs={1}>
            <IconButton component="nav" aria-label="menu" size="large">
              <MenuIcon
                aria-haspopup="true"
                aria-controls="lock-menu"
                className="nav-icon"
                onClick={handleClickListItem}
              />
            </IconButton>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {navList.map((item, index) => (
                <MenuItem
                  key={item.name}
                  selected={index === selectedIndex}
                  onClick={(event) =>
                    handleMenuItemClick(event, index, item.url)
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Nav;
