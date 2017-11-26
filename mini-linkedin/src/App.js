import React from 'react'
import { addGun, removeGun } from './index.redux'

class App extends React.Component {
  render() {
    const store = this.props.store
    const num = store.getState()
    return (
      <div>
        <h1>counter : { num }</h1>
        <button onClick = {() => store.dispatch(addGun())}>add one</button>
      </div>

    )
  }
}

export default App
