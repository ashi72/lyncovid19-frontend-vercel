import React from 'react';
import StudentCard from './StudentCard';
import Grid from '@material-ui/core/Grid';

const CardList = ({students}) => {
  const cards = students.map(student => {
    return (
      <Grid item xs = {0}>
        <StudentCard namefirstlast={student.gsx$namefirstlast.$t} studentid={student.gsx$studentid.$t} lasttestdate={student.gsx$lasttestdate.$t} testImage = {student.gsx$imageofyourcovid19test.$t} currentstatus = {student.gsx$currentstatus.$t}  />
      </Grid>);
  });

  return (
    <div>
      <Grid container spacing={4}>
        {cards}
      </Grid>
    </div>
  );  
}

export default CardList;