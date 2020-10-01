import { combineReducers } from 'redux'
import users from './users/reducer'
import detail from './detail/reducer'

export default combineReducers({
	users,
	detail,
})
