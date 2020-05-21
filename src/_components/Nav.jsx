import React, {Component ,useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions/user.actions';
import {  } from '../scss/core/nav.scss';
import CsSrchModal from '../_components/modals/csSearch';

function Navbar(props){

const [showCsSrchModal, setCsSrchModal] = useState(false);
 
const showMenu = (e) => {
  
  switch(e.target.text)
  {
    case 'Open Customer':
      setCsSrchModal(true)
      break;

  }
  
}

const hideModal = (e) => {
  console.log(showCsSrchModal)
  setCsSrchModal(false)
}

const logout = (e) => {
props.logout();
}

  const items =props.dataItems.map((item, i) => {
    return ( <li className="dropdown-submenu nav-item" key={i}>
     <a  className="dropdown-toggle" >{item.name}</a>
     { 
     item.subMenu?item.subMenu.map((c, i) => 
     <ul className="dropdown-menu" key={i}>
       <li className="dropdown-submenu">
        <a onClick={(e) => showMenu(e)}  className="dropdown-toggle"  >{c.name}</a>
        {
        c.subMenu?c.subMenu.map((c2, i2) =>
        <ul className="dropdown-menu"  key={i2}>
          <li><a href="#">{c2.name}</a></li>
          </ul>
        ):null
          }
          </li>
     </ul>):null}
   </li>
    )
     })

  return (

    <nav className="navbar navbar-expand-lg navbar-dark" > <a className="navbar-brand" href="#" data-abc="true">Esp</a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
            {items}
        </ul>
        <form className="form-inline my-2 my-lg-0"> <input className="form-control mr-sm-2" type="text" placeholder="Search"/> <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> 
        <button className="btn btn-secondary my-2 my-sm-0" type="submit"   onClick={(e) => logout(e)}    >Logout</button> 
        </form>
    </div>
    
    <CsSrchModal show={showCsSrchModal} handleClose={(e) => hideModal()} >
          <h2>Customer Search</h2>
    </CsSrchModal>

    </nav>
    
    );
}

const actionCreators = {
  logout: userActions.logout
}

const connecteNavbar = connect(null, actionCreators)(Navbar);

export  { connecteNavbar as Navbar };