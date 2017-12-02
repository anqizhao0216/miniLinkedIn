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
        <Logo></Logo>
        <h2>register</h2>
        <List>
          <InputItem
            onChange={v=>this.handleChange('user', v)}
          >Username</InputItem>
          <WhiteSpace />
          <InputItem
            onChange={v=>this.handleChange('pwd', v)}
          >Password</InputItem>
          <WhiteSpace />
          <InputItem
            onChange={v=>this.handleChange('repeatpwd', v)}
          >Confirm Password</InputItem>

          <WhiteSpace />
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
