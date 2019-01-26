import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
    state = {
        hello: '',
    }

    render() {
        return (
            <div>
                <div>
                    <h3 className='rule'>Rules</h3>
                    <span className='ruleOne'>1</span><span className='message1'>Always pay your bill on time</span>
                    <span className='ruleTwo'>2</span><span className='message2'>Pay your balance in full every month</span>
                </div>
            </div>
        )
    }
}

export default AboutUs;