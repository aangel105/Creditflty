import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

//Components
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
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
            <Link id='aboutUs' to='/about'> How it Work | </Link>
            <Link id='credit_score' to='/creditscore'>Credit Score | </Link>
            <Link id='rewards' to='/rewards'>Rewards</Link>
          </nav>
          <Link id='logo_name' to='/'>
            Creditfly
          </Link>
        </div>
        
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/creditscore' component={Credit_app} />
            <Route path='/rewards' component={Rewards_Profile} />
            <Route path='/signup' component={Signup}/>
            <Route exact path='/about' component={AboutUs}/>
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
