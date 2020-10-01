import { ajax } from 'rxjs/ajax'
import { ofType } from 'redux-observable'
import { mergeMap, map } from 'rxjs/operators'
import { actionTypes as types, fetchDataSuccess } from './actions'
import { combineEpics } from 'redux-observable'


// epic
const fetchUserEpic = (action$) => {
	return action$.pipe(
		ofType(types.FETCHDATA),
		mergeMap((action) => {
			return ajax.getJSON(`https://api.github.com/users/${action.userName}`).pipe(
				map(response => {
					console.log(response)
					return fetchDataSuccess(response)
				})
			)
		})
	)
}

export default combineEpics(fetchUserEpic)
