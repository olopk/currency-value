import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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
  const [value, setValue] = React.useState(2);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        className={classes.tabs}
        centered
      >
        <Tab label="Currencies" icon={<EuroIcon />}/>
        <Tab label="Favourite" icon={<FavoriteIcon />}/>
      </Tabs>
    </Paper>
  );
}