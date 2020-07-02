import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EuroIcon from '@material-ui/icons/Euro';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    tabs: {
        justifyContent: 'center',
        color: 'black'
    }
})

export default function DisabledTabs() {
  const [value, setValue] = React.useState(1);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Paper square style={{boxShadow: 'none'}}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        className={classes.tabs}
        centered
      >
        <Tab label="Waluty" value={1} icon={<EuroIcon />} component={Link} to='/'/>
        <Tab label="Ulubione" value={2} icon={<FavoriteIcon/>} component={Link} to='/favourites'/> 
      </Tabs>
    </Paper>
  );
}