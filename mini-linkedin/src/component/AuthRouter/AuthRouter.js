import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

@withRouter
class AuthRouter extends React.Component {
  componentDidMount() {
    // get user info
    axios.get('/user/info')
      .then(res => {
        if (res.status === 200) {
          if (res.data.code === 0) {

          } else {
            console.log(this.props.history)
          }
          console.log(res.data)
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
