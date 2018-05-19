import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Components/Home/Home.css'
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Logo from './Images/Logo.png';
import Signup from './Components/Signup/Signup';
import Credit_app from './Components/CreditScore/Credit_app';
import Rewards_Profile from './Components/Rewards/Rewards_Profile';


class App extends Component {
  constructor() {
    super()
    this.state = {
      score: '',
      bigineer: [],
      intermidiate: [],
      pro: [],
      expert: [],
    }
  }

  render() {
    return (
      <div>
        <div className='topbar'>
          <nav className="nav_bar">
            <Link id='aboutUs' to='/abouUs'> How it Work | </Link>
            <Link id='login' to='/login'>Login | </Link>
            <Link id='signup' to='/signup'>Signup</Link>
          </nav>
          <Link id='logo_name' to='/'>
            Creditfly
            {/* <img id="logo" src={Logo}></img> */}
          </Link>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/creditscore' component={Credit_app} />
            <Route path='/rewards' component={Rewards_Profile} />
            <Route path='/signup' component={Signup}/>
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
