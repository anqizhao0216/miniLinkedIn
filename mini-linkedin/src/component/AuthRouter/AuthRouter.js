import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

@withRouter
class AuthRouter extends React.Component {
  componentDidMount() {
    // get user info
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if (publicList.indexOf(pathname) > -1) {
      return null
    }
    axios.get('/user/info')
      .then(res => {
        if (res.status === 200) {
          if (res.data.code === 0) {

          } else {
            this.props.history.push('/login')
          }
        }
      })
  }

  render() {
    console.log('hello')
    return (
      <div>redirect</div>
    )
  }
}

export default AuthRouter
