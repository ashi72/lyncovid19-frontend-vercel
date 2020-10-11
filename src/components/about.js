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
      axios.put("http://localhost:7000/api/users/update/" + props.user.email, {
        google_url: url
      }).then(response => console.log(response));
    }
    console.log("submitted!");
    console.log(url)
    console.log("then use callbacks to get the url to student list, and redirect");

  }

  return(
    <div className ="container">

      <Box>
        <h3>
          Getting Started
        </h3>
        <Divider/>

        <Box>
          <Box pt = {5}  className = "getting started container">
            <h5>
              Overview
            </h5>
              <Box m = {2}>
                <h6>
                  This app is made to help reduce the spread of COVID-19 in communities. Made for schools, this app allows homeroom teachers to
                  have a digital database of students' testing records to keep track of the health of student and filter them based on their name, student ID, and their testing status (none, cleared, pending, uncleared). Ideally, this
                  app's users would be homeroom teachers in a school. That way a teacher would only have to manage a certain group of students for
                  the academic year as oposed to managing each class of students they teach.
                </h6>
              </Box>
          </Box>

          <Box>
            <Box pt = {5}  className = "getting started container">
              <h5>
                Please follow the steps below to use the app!
              </h5>
                <Box m = {2}>
                  <a href = "https://docs.google.com/forms/d/1y5s3OGXzoinp9OakKOh4oMuACnVobCr7B3O5i-lsQdQ/copy"  className="profile link">
                  <h6>
                    1. Click here to make a copy of the Google Form Template
                  </h6>
                  </a>
                  <br/>
                  <h6>
                    2. After making the copy of the Google Form Template, you should now be able to see it in your Google Drive and be
                    able to edit it. Replace the Google Form titles to "Mr. Smith Student Check-up Form"
                    using the name your students call you instead of Mr. Smith.
                  </h6>
                    <br/>
                  <h6>
                    3. After retitling your Google Form, you have to generate a Google Sheets to keep track of the responses. To do this,
                    click on the "Responses" tab of the Google Form located at the top of the Google Form and next to the "Questions" tab.
                    Then click the green spreadsheet icon to the bottom right of "Responses" as illustrated below.
                  </h6>
                    <Box m = {2}>
                  <img className = "photo" src = {CreateSpreadsheet} style = {{height: "350px", width: "700px"}}/>
                    </Box>
                    <br/>
                  <h6>
                    4. After generating the Google Sheets, a Google Sheets will be located in your Google Drive. Open the Google Sheet in a new
                    tab and copy the URL in the browser. Paste the URL into the empty field below and submit.
                  </h6>
                    <Box m = {2}>
                      <Input
                       name = "Google Sheet URL"
                       onChange = {e => setUrl(e.target.value)}
                       placeholder = "Google Sheets URL"
                       fluid />
                     <Button fluid color = 'blue' onClick = {handleSubmit}>
                       Submit
                     </Button>
                    </Box>
                </Box>
              </Box>
            </Box>
          </Box>
            <Box pt = {5}  className = "getting started container">
              <h5>
                You can start using the app!
              </h5>
              <Box pt = {5}>
              </Box>
            </Box>
        </Box>
    </div>
  )
}

export default withAuthenticationRequired(About);
