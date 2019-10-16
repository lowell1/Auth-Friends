// import React, {useState} from 'react';
import React from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import AddFriend from "./AddFriend";
import FriendsList from "./FriendsList";

function App() {
  // const {state, setState} = useState({token: ""});

  // const setToken = newToken => {
  //   setState({...state, token: newToken});
  //   console.log(token)
  // }

  return (
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/add_friend">Add Friend</Link>
        </li>
        <li>
          <Link to="/friends_list">FriendsList</Link>
        </li>
      </ul>
      {/* <Route path="/public" component={Public} /> */}
      <Route path="/login" component={Login} />
      <PrivateRoute path="/add_friend" component={AddFriend}/>
      <PrivateRoute path="/friends_list" component={FriendsList}/>
    </div>
  );
}

export default App;
