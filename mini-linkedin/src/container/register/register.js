import React from 'react'
import Logo from '../../component/logo/logo'
import {List,Radio,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:'',
      pwd:'',
      repeatpwd:'',
      type: 'talent'
    }
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        <h2>register</h2>
        <List>
          <InputItem>Username</InputItem>
          <WhiteSpace />
          <InputItem>Password</InputItem>
          <WhiteSpace />
          <InputItem>Confirm Password</InputItem>
          <RadioItem checked={this.state.type=='talent'}>
            Talent
          </RadioItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type=='boss'}>
            Boss
          </RadioItem>
          <WhiteSpace />
          <Button type='primary'>Register</Button>
        </List>
      </div>
    )
  }
}

export default Register
