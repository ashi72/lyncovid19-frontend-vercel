import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const Pages = ({amount, perPage, handler}) => {
    const useStyles = makeStyles({
        center: {
            display: "flex",
            justifyContent: "center"

        }
    });

    const classes = useStyles()
    return(
        <div className = {classes.center}>
            <Pagination count = {Math.ceil(amount/perPage)} onChange = {handler}/>
        </div>
    );
};

export default Pages;