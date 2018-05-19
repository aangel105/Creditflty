import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Signup.css'

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            isSignup: ''
        }
    }

    render() {
        return (
            <div>
                <div className='signup_div'>
                    <div id='signup_message'>
                        <span id='hello'> Hello</span><br />
                        <span id='world'>World.</span><br />
                        <span id='spend'>Swipe</span>
                        <img src='http://backgroundcheckall.com/wp-content/uploads/2017/12/arrow-icon-transparent-background-8.png' />
                        <span id='spend'>Earn</span>
                        <img src='http://backgroundcheckall.com/wp-content/uploads/2017/12/arrow-icon-transparent-background-8.png' />
                        <span id='spend'>Travel</span>
                    </div>
                    <nav id='signup_nav'>
                        <img id='circular_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Circle_%28transparent%29.png/480px-Circle_%28transparent%29.png' />
                        <img id='signup_logo' src='https://www.tlv-sh.de/wp-content/uploads/2016/09/avatar.png' />

                        <form className='signup_form'>
                            <label for="fullname"><b>Full Name</b></label><br />
                            <input type='text' name='Fullname' required /><br />

                            <label for="email"><b>Email</b></label><br />
                            <input type='email' name="psw" required /><br />

                            <label for="uname"><b>Password</b></label><br />
                            <input type='password' required /><br />

                            <label for="psw"><b>Confirm Password</b></label><br />
                            <input type='password' name="psw" required /><br />

                            <button onClick={this.handleLogin}>Sign Up</button> <br />
                        </form>
                        <p id='myP'>Already have an account <Link to='/login'>Login </Link></p>
                    </nav>
                </div>
            </div>

        )
    }
}

export default Signup;