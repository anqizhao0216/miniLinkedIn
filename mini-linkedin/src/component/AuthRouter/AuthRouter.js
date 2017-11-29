import React from 'react'
import axios from 'axios'

class AuthRouter extends React.Component {
  componentDidMount() {
    // get user info
    axios.get('/user/info')
      .then(res => {
        if (res.status === 200) {
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
