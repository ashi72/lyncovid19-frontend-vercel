import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from './Select2';
import {withAuthenticationRequired} from "@auth0/auth0-react";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '32vw',
    },
    float: "left",
    position: "relative",
    top: "13px"
  },
  center: {
    display: "flex",
    justifyContent: "center"
  },
  container: {
    marginBottom: "100px",
  },
  flexboxcontainer: {
    display: "flex",
    flexDirection: "row",
  }
}));
export default withAuthenticationRequired(function SearchBar(props) {
  const classes = useStyles();
  const [term, setTerm] = useState('');
  const [results, setResults] = useState(props.profiles);
  useEffect(() => {
    const removeDuplicates = (arr, prop) => arr.reduce((accumulator, currentValue) => {
      if(!accumulator.find(obj => obj[prop].$t === currentValue[prop].$t)){
        accumulator.push(currentValue);
      }
      return accumulator;
    }, [])
    if (!term) {
      setResults(removeDuplicates(props.profiles, "gsx$studentid"));
    }
    const search = async () => {
      if (/\d+/g.test(term)) {
        const data = props.profiles.filter(profile => profile.gsx$studentid.$t.toString().startsWith(term));
        setResults(removeDuplicates(data, "gsx$studentid"));
      } else {
        console.log(props.profiles);
        const data = props.profiles.filter(profile => profile.gsx$namefirstlast.$t.toLowerCase().startsWith(term.toLowerCase()));
        const data2 = props.profiles.filter(profile => profile.gsx$namefirstlast.$t.substring(profile.gsx$namefirstlast.$t.indexOf(" ") + 1, profile.gsx$namefirstlast.$t.length).toLowerCase().startsWith(term.toLowerCase()));
        setResults(removeDuplicates(data.concat(data2), "gsx$studentid"));
      }
    }
    if (term) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500)
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term, props.profiles]);
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className = {classes.container}>
      <div className={classes.center}><h1>Student List</h1></div>
      <div className = {classes.flexboxcontainer}>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField 
            id="outlined-search-small"
            label="Search..."
            variant = "outlined"
            size = "small"
            helperText="Search by name or student ID"
            onChange = {e => setTerm(e.target.value)}
          />
        </form>
        <Select profiles = {results} onSearch={props.onSearch}/>
      </div>
    </div>
  );
})