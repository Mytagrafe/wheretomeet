import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import CreateGroup from 'src/components/homepage/CreateGroup.js';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'© '}
      <Link color="inherit" href="localhost:3000" to="/">
        Wheretomeet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Homepage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Where to Meet
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              A simple way to organize meetups with friends and colleagues.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} display='flex' justifyContent='center'>
                <Grid item>
                  <Button component={Link} to="/login" variant="contained" color="primary">
                    Sign In
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={Link} to="/register" variant="outlined" color="primary">
                    Sign Up
                  </Button>
                </Grid>
				        <Grid item>
                  <CreateGroup />
                </Grid>
                <Grid item>
                  <Button component={Link} to="/app/dashboard" variant="outlined" color="primary">
                    Dashboard
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          i like cats
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}