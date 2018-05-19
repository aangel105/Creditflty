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
            <div id='login_message'>
            <span id='hello'> Hello</span><br/>
            <span id='world'>World.</span><br/>
            <span id='spend'>Swipe</span> <img src='http://backgroundcheckall.com/wp-content/uploads/2017/12/arrow-icon-transparent-background-8.png'/><span id='spend'>Earn</span>
            <img src='http://backgroundcheckall.com/wp-content/uploads/2017/12/arrow-icon-transparent-background-8.png'/>
            <span id='spend'>Travel</span>
            </div>      
                <nav id='login_nav'>
                    <img id='circular_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Circle_%28transparent%29.png/480px-Circle_%28transparent%29.png' />
                    <img id='login_logo'src='https://www.tlv-sh.de/wp-content/uploads/2016/09/avatar.png' />

                    <form className='login_form'>
                        <label for="fulltname"><b>Full Name</b></label><br />
                        <input type='text' name='Fullname' required /><br />

                        <label for="email"><b>Email</b></label><br />
                        <input type='text' name="psw" required /><br />

                        <label for="uname"><b>Username</b></label><br />
                        <input type='text' required /><br />

                        <label for="psw"><b>Password</b></label><br />
                        <input type='password' name="psw" required /><br />

                        <button  onClick={this.handleLogin}>Login</button> <br />
                    </form>
                    <span class="psw">Forgot <a href="#">password?</a></span> <br />
                    <p id='myP'>Don't have an account <Link to='/signup' />Signup</p>
                </nav>
            </div>
        </div>
        )
    }
}

export default Login;