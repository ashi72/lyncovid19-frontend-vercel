import React, {useState, useEffect, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';
import StudentList from './StudentList';
import {withAuthenticationRequired} from "@auth0/auth0-react";
export default withAuthenticationRequired(function ListRender(props){
    const [final, setFinal] = useState(props.profiles);
    const onSearch = (finalT) => {
        if (JSON.stringify(final) != JSON.stringify(finalT)){
            setFinal(finalT);
        } 
    }
    return(
        <div>
            <SearchBar profiles = {props.profiles} onSearch={onSearch}/>
            <StudentList students = {final} cardsPerPage = {4}/>
        </div>
    )
})