import React from 'react'
import Logo from '../../component/logo/logo'
import {login} from '../../redux/user.redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'

@connect(
  state => state.user,
  {login}
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
    }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleChange(key, value) {
    this.setState ({
      [key]: value
    })
    // console.log(this.state.user)
  }
  handleLogin() {
    this.props.login(this.state)
  }
  register() {
    this.props.history.push('./register')
  }
  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo></Logo>
        <WingBlank>
          <List>
            {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
            <InputItem
              onChange={v=>this.handleChange('user', v)}
            >Username</InputItem>
            <WhiteSpace />
            <InputItem
              onChange={v=>this.handleChange('pwd', v)}
            >Password</InputItem>
          </List>
          <WhiteSpace />
          <Button
            onClick = {this.handleLogin}
            type="primary">Log In</Button>
          <WhiteSpace />
          <Button onClick={this.register} type="primary">Register</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
