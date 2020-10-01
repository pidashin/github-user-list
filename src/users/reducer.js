import { actionTypes as types } from './actions'
import { combineReducers } from 'redux'

const data = (state = [], action) => {
	switch (action.type) {
		case types.FETCHDATASUCCESS: {
			return Array.from(action.data.users)
		}
		default:
			return state
	}
}

const next = (state = null, action) => {
	switch (action.type) {
		case types.FETCHDATASUCCESS: {
			return action.data.next
		}
		default:
			return state
	}
}

const loading = (state = false, action) => {
	switch (action.type) {
		case types.FETCHDATA:
			return true
		case types.FETCHDATASUCCESS:
			return false
		default:
			return state
	}
}

export default combineReducers({
	data,
	next,
	loading
})
