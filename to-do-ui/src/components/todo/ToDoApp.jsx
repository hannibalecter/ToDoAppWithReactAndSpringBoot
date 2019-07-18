import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
class ToDoApp extends Component {
    render() {
        return (
            <div className="ToDoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            {/* <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/> */}
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />

                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>

            </div>
        )
    }
}


class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.in28minutes.com" className="navbar-brand">in28Minutes</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to={'/login'}>Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to={'/logout'} onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}
class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2018 @in28minutes</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out </h1>
                <div className="container">

                    Thank You for Using Our Application

                </div>
            </div>
        )
    }
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos:
                [
                    { id: 1, description: '1Learn React', done: false, targetDate: new Date() },
                    { id: 2, description: '2Learn React', done: false, targetDate: new Date() },
                    { id: 3, description: '3Learn React', done: false, targetDate: new Date() }
                ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>status</th>
                                <th>date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>
                                                {todo.id}
                                            </td>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos. <Link to="/todos">here</Link> <a href="/todos">here</a>
                </div>
            </>
        )
    }
}
class ErrorComponent extends Component {
    render() {
        return <div>An Error Occured. I don't know what to do! Contact support at IT</div>
    }
}


class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'asd',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: true

        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }
    handleChange(event) {
        //console.log(this.state);

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
    //             password: event.targset.value
    //         }
    //     )
    // }

    loginClicked() {
        if (this.state.username === 'asd' && this.state.password === 'dummy') {
            AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState(
                {
                    showSuccessMessage: true,
                    hasLoginFailed: false
                }
            )
            //console.log(this.state);

        }
        else {

            this.setState(
                {
                    showSuccessMessage: false,
                    hasLoginFailed: true
                }
            )
            //console.log(this.state);


        }

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">

                    {/*<ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Incalid Credential</div>}
                    {this.state.showSuccessMessage && <div>Login Successfull</div>}
                    {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>

                </div>
            </div>
        )
    }


}

// function ShowInvalidCredential(props) {
//     if (props.hasLoginFailed) {
//         return <div>Incalid Credential</div>
//     }
//     return null;
// }

// function ShowLoginSuccessMessage(props) {
//     if (props.showSuccessMessage) {
//         return <div>Login Successfull</div>
//     }
//     return null;
// }

export default ToDoApp;