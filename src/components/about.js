import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Divider} from '@material-ui/core';
import CreateSpreadsheet from '../images/CreateSpreadsheet.png'
import { Button,Input } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import LynbrookNavyLogo from '../images/navy-lynbrook-logo.jpeg'
import axios from 'axios';
import {withAuthenticationRequired} from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100ch',
    },
  },
}));

const About = (props) => {
  const [url, setUrl] = useState('');
  const classes = useStyles();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.user);
    if (props.user) {
      axios.put("https://lyncovid-new-backend.herokuapp.com/api/users/update/" + props.user.email, {
        google_url: url
      }).then(response => console.log(response));
    }
    console.log("submitted!");
    console.log(url)
    console.log("then use callbacks to get the url to student list, and redirect");

  }

  return(
    <div className ="container">
      <Box m = {5}>
        <h3>
          About Us
        </h3>

        <Divider/>
        <Box>
          <Box pt = {2} className = "introduction container">
            <h5>
              Welcome to our Lynbrook COVID-app!
            </h5>
            <br/>
            <h6>
              Our app is made to help schools manage students' covid testing records.
              Ideally, this app's users would be homeroom teachers, so that each student is managed by a single teacher.
            </h6>
            <br/>
            <h6>
              Each homeroom class has a list of student cards which can be filtered by testing status and
              last testing date.
            </h6>

          </Box>
          <br/>
          <Box className = "getting started container">
            <Box>
              <h3>
                If this is your first time using the app, the field below should be currently blank.
                Follow the steps below and enter the google sheet URL here before using the app.
              </h3>
              <Input
                 name = "Google Sheet URL"
                 onChange = {e => setUrl(e.target.value)}
                 placeholder = "Google Sheet URL"
                 fluid />
               <Button fluid color = 'blue' onClick = {handleSubmit}>
                 Submit
               </Button>
            </Box>

            <Box>
              <h4>
                Getting Started
              </h4>
            </Box>

            <Box m = {2}>
              <h6>
                To begin, start on the Home page, where the Dashboard is displayed.
                From there, add your first class by clicking the green "Add Class" button!
              </h6>
              <br/>
              <h6>
                You should then see an Add Class form that requires
                __check_with_aadip__ and a url to a google spreadsheet
              </h6>
              <br/>
              <h6>
                To get this google spreadsheet url, begin by clicking the link below
                and making a copy of the template google form in your Google Drive.
              </h6>
              <a href = "https://docs.google.com/forms/d/1y5s3OGXzoinp9OakKOh4oMuACnVobCr7B3O5i-lsQdQ/copy"  className="profile link">
                <h5> Link to Template Google Form </h5>
              </a>
              <br/>
              <h6>
                You should now see a google form that you can edit. Change the title of the form
                from "Copy of Student Check-up Form Template" to "Mr. Smith Student Check-up Form Template"
                using your last name instead of Smith.
              </h6>
              <br/>
              <h6>
                At the top of the page, switch from the Questions tab to Responses.
                Then click the green spreadsheet icon to the bottom right of Responses.
              </h6>
              <img className = "photo" src = {CreateSpreadsheet} style = {{height: "350px", width: "700px"}}/>
              <br/>
              <h6>
                A Google Spreadsheet should have been created in your Drive and should automatically
                open in a new tab. Copy the URL in the browser and paste it into the empty field you saw at the top of this page.
              </h6>
            </Box>
          </Box>
          <br/>
          <Box className = "using student list container"  >
            <Box>
              <h4>
                Checking Student Statuses
              </h4>
            </Box>

            <Box m = {2}>
              <h6>
                Using the side bar on the left, head to the Student List tab.
                Here, you can filter student cards by _______ gotta wait until that funcitonality is done
              </h6>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default withAuthenticationRequired(About);

//thanks https://www.coffeenancy.com/2019/04/share-a-copy-of-a-google-form/ for teaching how to allow strangers to copy a google form
