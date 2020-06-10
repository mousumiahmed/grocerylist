import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home.js';
import Create from './components/Create.js';
import Show from'./components/Show.js';
import Edit from './components/Edit.js';
import Login from './components/Login.js';
import Delete from './components/Delete.js';
import axios from "axios";



export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        isLoggedIn: true
      }
  
    }
     loggedOut=()=> {
       this.setState({
        isLoggedIn: false,
      })
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr- auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/login'} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                                  <Link className="nav-link ml-3" onClick={this.loggedOut} to='/logout'>Logout</Link>
                            </li>
              </ul>
            </div>
          </nav> 
          
          
              <Route path = "/" exact component = {Home} />
              <Route path = "/create"  component = {Create} />
              <Route path ={`/show:id`}  component = {Show} />
              <Route path ={`/edit:id`}  component = {Edit} />
              <Route path ={`/delete:id`}  component = {Delete} />
              <Route path={'/login'} component={Login}/>
          
        </div>
      </React.Fragment>
    );
  }
}


