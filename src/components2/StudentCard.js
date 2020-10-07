import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import CardActionArea from '@material-ui/core/CardActionArea';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

const StudentCard = ({namefirstlast, studentid, lasttestdate, testImage, currentstatus}) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      height: 300,
    },
    card: {
      maxWidth: 400,
      minWidth: 300,
      margin: "auto",
      marginBottom: 12,
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      },
      border: "1.2px solid rgb(0, 0, 0)"
    },
    icon: {
      position: "relative",
      left: "8px",
      top: "4px",
      color: "navy",
    },
    headerCleared: {
      backgroundColor:" #00cc66"
    },
    headerUncleared: {
      backgroundColor:" #ff3333"
    },
    headerPending: {
      backgroundColor:" #ffcc00"
    },
    body: {
      backgroundColor:"white"
    },
    clearer: {
      float: "left",
    }
  });
  const [showProfile, setShowProfile] = useState(false);
  const onBack = () => {
    setShowProfile(false);
  }
  const classes = useStyles();
  return(
    <div>
      <Card className = {classes.card}>
        <CardActionArea href = {testImage} target="_blank">
          {currentstatus === "Cleared"
            ? <CardContent className = {classes.headerCleared}><Typography variant = "h4" align= "center" gutterBottom>{namefirstlast}</Typography></CardContent>
            : currentstatus === "Uncleared" ? <CardContent className = {classes.headerUncleared}><Typography variant = "h4" align= "center" gutterBottom>{namefirstlast}</Typography></CardContent>
            : <CardContent className = {classes.headerPending}><Typography variant = "h4" align= "center" gutterBottom>{namefirstlast}</Typography></CardContent>     
            }
          <CardContent className = {classes.body}>
            <Typography variant = "h6" gutterBottom>
              Student ID: {studentid}
            </Typography>
            <Typography variant = "h6" gutterBottom>
              Last Tested: {lasttestdate} 
            </Typography>
            <Typography variant = "h6" gutterBottom>
              <div className = {classes.clearer}>
                Status: {currentstatus} 
              </div>
              {currentstatus === "Cleared"
                  ? <div className = {classes.icon}> <CheckIcon/> </div> 
                  : currentstatus === "Uncleared"
                    ? <div className = {classes.icon}> <ClearIcon/> </div> 
                    : <div className = {classes.icon}> <HourglassEmptyIcon/> </div>                    
              }
            </Typography>
          </CardContent>
        </CardActionArea>


  


      </Card>
    </div>
  )
}
export default StudentCard;