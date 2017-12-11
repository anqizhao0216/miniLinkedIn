import React from 'react'
import Logo from '../../component/logo/logo'
import {List,Radio,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'


@connect(
  state => state.user,
  {register}
)
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:'',
      pwd:'',
      repeatpwd:'',
      type: 'talent'
    }
    this.handleRegister = this.handleRegister.bind(this)
  }
  handleRegister() {
    this.props.register(this.state)
  }
  handleChange(key, value) {
    this.setState ({
      [key]: value
    })
    // console.log(this.state.user)
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo></Logo>
        <h2>register</h2>
        <List>
          {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
          <InputItem
            onChange={v=>this.handleChange('user', v)}
          >Username</InputItem>
          <WhiteSpace />
          <InputItem
            type='password'
            onChange={v=>this.handleChange('pwd', v)}
          >Password</InputItem>
          <WhiteSpace />
          <InputItem
            type='password'
            onChange={v=>this.handleChange('repeatpwd', v)}
          >Confirm Password</InputItem>

          <WhiteSpace />
          <RadioItem checked={this.state.type=='talent'}
            onChange={v=>this.handleChange('type', 'talent')}
          >
            Talent
          </RadioItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type=='boss'}
            onChange={v=>this.handleChange('type', 'boss')}
          >
            Boss
          </RadioItem>
          <WhiteSpace />
          <Button type='primary'
            onClick={this.handleRegister}
          >Register</Button>
        </List>
      </div>
    )
  }
}

export default Register
