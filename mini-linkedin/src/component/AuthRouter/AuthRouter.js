import React from 'react'
import axios from 'axios'

class AuthRouter extends React.Component {

  render() {
    axios.get('/user/info').then(
      (req, res) => {
        if (res.status == 200) {
          console.log(res.data)
        }
      }
    )
    return (
      <div></div>
    )
  }
}

export default AuthRouter
