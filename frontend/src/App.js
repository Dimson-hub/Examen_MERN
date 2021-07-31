import React from 'react';
import {BrowserRouter as Router , Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/FontawesomeIcons";
import './App.css'

import Navbar from "./components/navbar.component";
import UserList from "./components/UsersList.component";
import EditUser from "./components/EditUser.component";
import CreateUser from "./components/CreateUser.component";
import DetailsUser from "./components/DetailsUser.component";


function App() {
  
  return ( 
    <Router>
      <Navbar />
      <div className="container">
      <br/>
      <Route path="/" exact component={UserList} />
      <Route path="/edit/:id"  component={EditUser} />
      <Route path="/create"  component={CreateUser} />
      <Route path="/details/:id"  component={DetailsUser} />
      </div>
    </Router>
  );
}

export default App;
