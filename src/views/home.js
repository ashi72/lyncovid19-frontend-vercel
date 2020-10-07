import React, { Fragment } from "react";
// import '../styling/home.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Imagery from '../images/VUVBR2Z3OBG3LF6JAG7RMAGZIE.jpg';
import { Hero, Content } from "../components";

const responseGoogle = (response) => {
  console.log(response);
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Imagery})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#7ab9ff',
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root} style = {{margin:20}}
>

      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

      <div className ="container">
        <div className ="center">

          <div className ="content">
            <h1>  Welcome to Lynbrook's COVID 19 App! </h1>
            <h4> To aid schools for in-person learning </h4>
            <h4> Manage Student COVID Testing data to ensure safe school practices! </h4>
            <h4> Automate the process with a linked Google form! </h4>
            <h4> Easily sort or search a list of students by last test date, testing status, or name </h4>

          </div>
        </div>
      </div>
      </Grid>
    </Grid>
  );
}

// const Home = () => (
//   <Fragment>
//     <Hero />
//     <hr />
//     <Content />
//   </Fragment>
// );
//
// export default Home;
