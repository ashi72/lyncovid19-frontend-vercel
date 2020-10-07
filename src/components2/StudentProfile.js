import React from 'react'
import {Box, Grid, Container, Typography} from '@material-ui/core'
import Button from '@material-ui/core/Button';

const StudentHeader = ({namefirstlast, studentid, lasttestdate, imageurlofyourcovid19test, onBack}) => {
  console.log(imageurlofyourcovid19test);
  // console.log(studentJson.namefirstlast);
  return (
    <div className = "ui card" style={ { backgroundColor: "navy", height: "100%"}}>
      <Box border={1} m={2} padding = {2} style = {{backgroundColor:"white"}}>
        <div>
          <div className="header" style={{display:"flex"}} >
            <Box m={2}>
              <Button onClick={() => { onBack() }}>Back</Button>
            </Box>
            <div className = "header text">
              <Box m={2}>
                <Typography variant="h4">
                  {namefirstlast}
                </Typography>
                <Typography variant="h5"> Student ID: {studentid}</Typography>
                <Typography variant="h4">
                  Last Test Date: {lasttestdate}
                </Typography>
              </Box>
            </div>
          </div>
        </div>
      </Box>
      <Box border={1} padding = {2} m={2} style = {{backgroundColor:"white", }}>
        <img alt = "no image" src = {imageurlofyourcovid19test} width="60%"/>
      </Box>
    </div>
  )
}
export default StudentHeader;
//{studentJson.imageurlofyourcovid19test}