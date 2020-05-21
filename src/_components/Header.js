import React, { Component } from 'react';
import {Navbar} from '../_components/Nav';
import DataTable from '../_components/DataTable';

class Header extends Component {

  render() {
  
  const dataItems = [{
    name: "Home",
    subMenu: [{
      name: "Open Customer"
      }]
  }
];


  return (

  <div><Navbar  dataItems={ dataItems } /></div>

  )
  }
}

export default Header;