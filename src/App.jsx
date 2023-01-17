import React from 'react';
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default App;
