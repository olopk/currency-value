import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SingleDataItem from './SingleDataItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useDispatch} from 'react-redux';
import {TOGGLE_FAVOURITE} from '../../store/actions/actionTypes';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '4vh'
    },
    icon: {
        marginTop: '5vh'
    }
})

const DataContainer = (props) => {
    const classes = useStyles();
    const toggleFav = useDispatch();

    const {currencies, type, favourites} = props;

    let content = <CircularProgress className={classes.icon}/>;

    if(type === 'favourites'){
        content = <span style={{marginTop: '10vh'}}>Nie masz wybranych żadnych ulubionych walut.</span>
    }

    if(currencies.length !== 0){
        content = currencies.map((curr, index) => {

            return (
                <SingleDataItem 
                    key={index} 
                    name={curr.currency} 
                    code={curr.code} 
                    rate={curr.mid}
                    color={favourites && favourites.find(el => el.code === curr.code) ? 'secondary' : 'primary'}
                    type={type}
                    toggleFav={()=>toggleFav({type: TOGGLE_FAVOURITE, currency: curr})}
                     />
            )
        })
    }

    return(
        <div className={classes.root}>
            <SingleDataItem name='Nazwa' code='Kod' rate='Wartość' />
            {content}
        </div>
    )
}

export default DataContainer;

