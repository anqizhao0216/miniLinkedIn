const ADD_GUN = 'add'
const REMOVE_GUN= 'minus'

// reducer
export function counter(state=10, action) {
  switch (action.type) {
    case ADD_GUN:
        return state+1
    case REMOVE_GUN:
        return state-1
    default:
        return 10

  }
}

// action creater
export function addGun() {
  return {type: ADD_GUN}
}

export function removeGun() {
  return {type: REMOVE_GUN}
}

export function addGunAsync() {
  return dispatch => {
    // thunk 插件的使用，这里可以返回函数
    setTimeout(() => {
      // 异步技术后，手动执行dispatch
      dispatch(addGun())
    }, 1000)
  }
}
