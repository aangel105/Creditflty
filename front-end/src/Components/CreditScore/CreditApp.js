import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './CreditApp.css'

class Credit_Profile extends Component {
    constructor(){
        super()
        this.state = {
            Profile: ''
        }
    }

    render(){
        
        return (
            <div className='creditboard'>
               <h6 id='board_header'> Your credit score, Your ticket to your dream vacations</h6>
               <p id='tips'>Tips to Increase Your Score</p>
               <ul id='tips_list'>
                   <li>Credit Utilization below 10%</li>
                   <li>Pay your balance in full every Month</li>
                   <li>Check Your approval odds</li>
                </ul> 
                <div id='check_score'>
                <Link id="check_liks"target="_blank" to="https://www.creditkarma.com/">See my scores</Link>
                </div>
            </div>    
        )
    }
}

export default Credit_Profile;