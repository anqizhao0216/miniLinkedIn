import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App'
import {logout} from './Auth.redux'

function Archive() {
  return <h2>archive</h2>
}
function About() {
  return <h2>about</h2>
}

@connect(
  state=>state.auth,
  {logout}
)
class Dashboard extends React.Component {
  render() {
    const match = this.props.match
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
          <h1>{this.props.user}</h1>
          {this.props.isAuth ? <button onClick={this.props.logout}>Log Out</button> : null}
          <ul>
            <li >
              <Link to={`${match.url}/`}>Home</Link>
            </li>
            <li>
              <Link to={`${match.url}/archive`}>Archive</Link>
            </li>
            <li >
              <Link to={`${match.url}/about`}>About</Link>
            </li>
          </ul>
          <Route path={`${match.url}/`} exact component={App}></Route>
          <Route path={`${match.url}/archive`} exact component={Archive}></Route>
          <Route path={`${match.url}/about`} exact component={About}></Route>
      </div>
    )
    return (
      this.props.isAuth ? app : redirectToLogin
    )
  }
}

export default Dashboard
