import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            isLogin: false,
        }
    }
    handleLogin = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <div className='login_div'>
                <div id='signup_words'>
                        <span id='m'> We'll Take You </span><br />
                        <span id='p'>to the Edge.</span><br />
                    </div>
                    <nav id='login_nav'>
                        <img id='circular_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Circle_%28transparent%29.png/480px-Circle_%28transparent%29.png' />
                        <img id='login_logo' src='https://www.tlv-sh.de/wp-content/uploads/2016/09/avatar.png' />

                        <form className='login_form'>
            
                            <label for="email"><b>Email</b></label><br />
                            <input type='email' name="psw" required /><br />

                            
                            <label for="psw"><b>Password</b></label><br />
                            <input type='password' name="psw" required /><br />

                            <button onClick={this.handleLogin}>Login</button> <br />
                        </form>

                        <span id ='p'>Forgot <a id='p' href="#">password?</a></span> <br />
                        <p id='p' >Don't have an account <Link id='signup_link' to='/signup'>Signup</Link></p>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Login;