import React from 'react';
import { makeStyles } from '@material-ui/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        // flex: '1',   
        width: '70%',
        marginTop: '0.2vh',
        border: '2px solid black',
        borderRadius: '5px'
    },
    block: {
        borderRight: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
    },
    icon: {
        flex: '0.5',
    }
})

const SingleDataItem = (props) => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.block}><span>{props.name}</span></div>
            <div className={classes.block}><span>{props.code}</span></div>
            <div className={classes.block}><span>{props.rate}</span></div>
            <FavoriteIcon className={classes.icon}/>
        </div>
    )
}

export default SingleDataItem;

