import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  flexboxcontainer: {
    display: "flex",
    flexDirection: "row",
  }
}));
export default function ControlledOpenSelect2(props) {
  const classes = useStyles();
  const currentDate = new Date();
  const oneDay = 1000*60*60*24;
  let filter = [];
  const [status, setStatus] = useState('');
  const dateFilter = () => {
    if (status == 2) {
      filter = props.profiles.filter( (student) => Math.floor((currentDate - new Date(student.gsx$lasttestdate.$t)) / oneDay) < 8)
    } else if (status == 8) {
      filter = props.profiles.filter( (student) => Math.floor((currentDate - new Date(student.gsx$lasttestdate.$t)) / oneDay) > 7 && Math.floor((currentDate - new Date(student.gsx$lasttestdate.$t)) / oneDay) < 15)
    } else if (status == 15) {
      filter = props.profiles.filter( (student) => Math.floor((currentDate - new Date(student.gsx$lasttestdate.$t)) / oneDay) > 14)
    } else if (status == 1) {
      filter = props.profiles;
    }
    props.onSearch(filter);
  }
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dateFilter();
  }, [status, filter])


  
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  if (!status) {
    filter = props.profiles;
  }
  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Time Frame</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={status}
          onChange={handleChange}
        >
          <MenuItem value={1}>
            None
          </MenuItem>
          <MenuItem value={2}>0 - 7 days</MenuItem>
          <MenuItem value={8}>8 - 14 days</MenuItem>
          <MenuItem value={15}> {'>'} 14 days </MenuItem>
        </Select>
        <FormHelperText> Sort by time frame </FormHelperText>
      </FormControl>
    </div>
  );
}