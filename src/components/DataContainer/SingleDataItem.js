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
    const { name, color, code, rate, type, toggleFav} = props;

    return(
        <div className={classes.root}>
            <div className={classes.block}><span>{name}</span></div>
            <div className={classes.block}><span>{code}</span></div>
            <div className={classes.block}><span>{rate}</span></div>
            <FavoriteIcon 
                color={type === 'favourites' ? 'secondary' : color}
                className={classes.icon}
                onClick={toggleFav}/>
        </div>
    )
}

export default SingleDataItem;

