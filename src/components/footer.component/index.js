import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MoneyIcon from '@material-ui/icons/MonetizationOn';
import AverageIcon from '@material-ui/icons/InsertChart';
import StorageIcon from '@material-ui/icons/Storage';

import styles from './footer.component.css';

const FooterComponent = ({ count, totalPrice, averagePrice }) => {
  return (
    <div className={styles.root}>
      <List>
        <ListItem>
          <Avatar>
            <StorageIcon/>
          </Avatar>
          <ListItemText primary={`Total quantity: ${count} UAH`}/>
        </ListItem>
        <ListItem>
          <Avatar>
            <MoneyIcon/>
          </Avatar>
          <ListItemText primary={`Total price: ${totalPrice} UAH`}/>
        </ListItem>
        <ListItem>
          <Avatar>
            <AverageIcon/>
          </Avatar>
          <ListItemText primary={`Average price: ${averagePrice} UAH`}/>
        </ListItem>
      </List>
    </div>
  );
};

export default FooterComponent;