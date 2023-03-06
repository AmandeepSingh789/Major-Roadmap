import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
        // light: will be calculated from palette.primary.main,
        main: '#C5C6C7',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
  },
});
const options = ['Choose A Major', 'Computer Science BS', 'Computer Science BA'];

export default function MajorPicker({onSelect}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedMajor, setSelectedMajor] = useState('');

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
    setSelectedMajor(`${options[selectedIndex]}`);
    onSelect(`${options[selectedIndex]}`);

  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setSelectedMajor(`${options[index]}`);
    onSelect(`${options[index]}`);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        <Button 
        color='primary'
        onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          color='primary'
          
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        color='primary'
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      color='primary'
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      </ThemeProvider>
    </React.Fragment>
    
  );
}
