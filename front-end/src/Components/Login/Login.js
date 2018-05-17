import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            isLogin: false,
        }
    }
handleLogin = (e) =>{
    e.preventDefault();
}
    render() {
        return (
            <div>
               <nav>
                  <form>
                   <input type='text' placeholder='email' /><br/>
                   <input type='password' placeholder='Create password'/><br/>
                   <button onClick={this.handleLogin}>Login</button>   
                  </form>      
                 </nav>      
            </div>
        )
    }
}

export default Login;