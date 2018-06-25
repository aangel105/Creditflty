import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            score: '',
            rewards: '',
        }
    }
    handleScoreButton = (e) => {
        let {score} = this.state;
        e.preventDefault();
    }

    render() {
        return (
            <div>
                {/* <h1 className="header">ifly Rewards</h1>
                <h5 className="sub-header">Travel to live, Live to travel</h5> */}
                <div className="buttons">
                <Link to="/creditscore">
                <button id="credit-button">Credit Score</button>
                </Link>
                <Link to="/rewards">
                <button id="rewards-button">Rewards</button>
                </Link>
                </div>
                <div id="s"> 
                </div>   
                <div className ='footer'>
                    <div className='company_info'>
                     <h5>COMPANY INFO</h5> 
                     <Link id="footer_aboutUs" to="/aboutUs">
                     <p>About Creditfly</p>
                     </Link>
                     <Link id="footer_Privacy" to="/privacy">
                     <p>Privacy Policy</p> 
                     </Link>
                     <Link id="footer_termOfService" to="/termsOfService">
                     <p>Terms of Service</p>
                     </Link>   
                    </div> 
                    <div className='credit_resources'>
                    <h5>CREDIT RESOURCES</h5>
                    <h5 id ='notable_links'>NOTABLE LINKS</h5>
                    </div>     
                </div>     
            </div>
        )
    }
}

export default Home;