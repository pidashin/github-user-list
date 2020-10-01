import { actionTypes as types } from './actions'
// import { combineReducers } from 'redux'

const data = (state = null, action) => {
	switch (action.type) {
		case types.FETCHDATASUCCESS:
			return action.data
		default:
			return state
	}
}

export default data
