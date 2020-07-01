import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SingleDataItem from './SingleDataItem';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4vh'
    }
})

const DataContainer = () => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <SingleDataItem 
                name='Nazwa'
                code='Kod'
                rate='Wartość'
            />
        </div>
    )
}

export default DataContainer;

