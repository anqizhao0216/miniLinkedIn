import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'

// const mapStateToProps = (state) => {
//   return {num:state}
// }
// const actionCreaters = {addGunAsync,addGun,removeGun}

// 使用了插件所以connect可以写在App之前，而且不用传入App
@connect(
    state => ({num: state}),
    ({addGun, addGunAsync, removeGun})
)
// App 可以完全抽离出来，只和组件的属性有关
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.num }</h1>
        <button onClick = {this.props.addGun}>add one</button>
        <button onClick = {this.props.removeGun}>remove one</button>
        <button onClick = {this.props.addGunAsync}>wait one second</button>
      </div>
    )
  }
}

// connect 就是给我一个组件，返回一个新的组件with props
// App = connect(mapStateToProps, actionCreaters)(App)
export default App
