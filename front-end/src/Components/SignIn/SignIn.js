import React, { Component } from 'react';

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
                <input type='text' placeholder='email' name="psw" required /><br />
                <input type='password' placeholder='Create password ' name="psw" required /><br />
                <input type='password' placeholder='Confirm password ' name="psw" required /><br />
            </div>
        )
    }
}
