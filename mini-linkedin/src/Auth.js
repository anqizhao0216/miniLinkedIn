import React from 'react'
import { connect } from 'react-redux'
import { login, getUserData } from './Auth.redux'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'
@connect(
  state=>state.auth,
  {login, getUserData}
)

class Auth extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: {}
  //   }
  // }
  componentDidMount() {
    this.props.getUserData()
    // axios.get('/data')
    //   .then(res => {
    //     if (res.status === 200) {
    //         this.setState({
    //           data: res.data
    //         })
    //     }
    //     console.log(res)
    //   })
  }
  render() {
    return (
      <div>
        <h1>Welcome, {this.props.user}, you are {this.props.age} years old</h1>
        {this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
        <h2>Please log in first</h2>
        <button onClick={this.props.login}>Log In</button>
      </div>
    )

  }
}

export default Auth
