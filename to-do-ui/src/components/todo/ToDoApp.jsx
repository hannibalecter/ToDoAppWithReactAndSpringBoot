import React, { Component } from 'react'

class ToDoApp extends Component {
    render() {
        return (
            <div className="ToDoApp">
                <LoginComponent />
            </div>
        )
    }
}



class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'asd',
            password: ''
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }
    handleChange(event) {
        console.log(this.state);

        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value);

    //     this.setState(
    //         {
    //             username: event.target.value
    //         }
    //     )
    // }
   

    // handlePasswordChange(event) {
    //     console.log(event.target.value);

    //     this.setState(
    //         {
    //             password: event.target.value
    //         }
    //     )
    // }

    loginClicked(){
        console.log(this.state)
    }

    render() {
        return (
            <div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onChange={this.loginClicked}>Login</button>
            </div>
        )
    }
}


export default ToDoApp;