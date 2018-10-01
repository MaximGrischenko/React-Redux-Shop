import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Settings from '@material-ui/icons/Settings';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

import { saveState, loadState } from '../../../utils/LocalStorage';

import styles from '../header.style.css';

class UserBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switched: false,
      anchorEl: null,
    };

    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const savedState = loadState();
    if (savedState === 'User') {
      this.setState(
        {
          switched: false,
        }
      )
    } else if (savedState === 'Administrator') {
      this.setState(
        {
          switched: true,
        }
      );
      this.props.onSetPermission('Administrator')
    }
  }

  componentWillReceiveProps(nextProps) {
    saveState(nextProps.user.role);
  }

  handleClose() {
    this.setState({
      anchorEl: null,
    });
  };

  handleMenu(event) {
    this.setState({
      anchorEl: event.currentTarget,
    });
  }

  handleChange(event) {
    const { onSetPermission } = this.props;
    this.setState({
      switched: event.target.checked,
    });

    this.state.switched ? (
      onSetPermission('User')
    ) : (
      onSetPermission('Administrator')
    );
  }

  render() {
    const { switched, anchorEl } = this.state;
    const open = !!anchorEl;
    const { firstName, lastName, image, role } = { ...this.props.user };
    return (
      <div className={ styles.userBar }>
        { image ?  (
          <Avatar className={ styles.userAvatar } src={ image } alt="UN" />
        ) : (
          <Avatar className={ styles.userAvatar }>
            {firstName.charAt(0)}{lastName.charAt(0)}
          </Avatar>
        )}
        <div className={ styles.userName }>
          <Typography variant="title" color="inherit">
            { firstName } { lastName }
          </Typography>
          <p>Role: { role }</p>
        </div>
        <IconButton
          size="large"
          aria-owns = { open ? "settings_menu" : null}
          aria-haspopup = "true"
          onClick = { (event) => this.handleMenu(event) }
          color = "inherit">
          <Settings />
        </IconButton>
        <Menu id="settings_menu"
          anchorEl={ anchorEl }
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={ open }
          onClose={ () => this.handleClose() }>
          <MenuItem>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch checked={ switched } onChange={(event) => this.handleChange(event)} aria-label="SwitchPermission"/>
                }
                label={ switched ? 'Administrator' : 'User' }
              />
            </FormGroup>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default UserBar;