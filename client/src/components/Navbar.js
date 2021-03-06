import React,{Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item" >
                    <Link to = "/login" class="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item" >
                    <Link to = "/register" class="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )   
   
    const userLink = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/profile" className="nav-link">
                    User
                </Link>
            </li>
            <li className="nav-item">
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                    Logout
                </a>
            </li>
        </ul>
    )
    }
}
