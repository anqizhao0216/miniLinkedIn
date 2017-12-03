
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
  isAuth: '',
  msg: '',
  user: '',
  pwd: '',
  type: ''
}
// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg:'', isAuth:true,}
    case ERROR_MSG:
    default:
      return state

  }
}

export function register({user,pwd, repeatpwsd, type}) {
  if (!user||!pwd||!type) {
    return errorMsg('please type username and passward')
  }
  if (pwd !== repeatpwd) {
    erturn errorMsg('different passward')
  }
  return dispatch => {
    axios.post('/user/register', {user, pwd, type})
    .then()
  }
}
