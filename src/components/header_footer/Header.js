import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '../../resources/images/icons/menu.png';
import SideDrawer from "./SideDrawer";

class Header extends Component {

  state = {
    drawerOpen: false,
    headerShow: false
  };

  componentDidMount() {
    window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll = () => {
    if(window.scrollY > 0){
      this.setState({headerShow: true})
    } else this.setState({headerShow: false})
  };

  toggleDrawer = (value) => {
    value !== this.state.drawerOpen && this.setState({ drawerOpen: value })
  };

  render() {

    const {drawerOpen ,headerShow} = this.state;

    return (
      <AppBar
        position="fixed"
        style={{
          background: headerShow ? '#2f2f2f' : 'transparent',
          boxShadow: 'none',
          padding: '10px 0'}}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <img src={MenuIcon} alt="MenuIcon" style={{height:'18px',width:'18px'}}/>
          </IconButton>
          <SideDrawer
            open={drawerOpen}
            close={(value) => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;