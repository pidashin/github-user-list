import { fromFetch } from 'rxjs/fetch'
import { ofType } from 'redux-observable'
import { mergeMap, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs/Observer'
import { actionTypes as types, fetchDataSuccess } from './actions'
import { combineEpics } from 'redux-observable'


// epic
const fetchUserEpic = (action$) => {
	return action$.pipe(
		ofType(types.FETCHDATA),
		mergeMap((action) => {
			let linksFromHeader = {first: null,
				prev: null,
				next: null,
				last: null,}
			
			const url = action.url ? action.url : 'https://api.github.com/users?since=0&per_page=20'

			return fromFetch(url).pipe(
				switchMap((response) => {
					const link = response.headers.get('link')

					const reg = /<(.*)>.*rel="(.*)"/
					const parts = link.split(',')
					const tmp = parts.reduce((acc, cur) => {
						const matches = reg.exec(cur)
						if (matches) {
							acc[matches[2]] = matches[1]
						}

						return acc
					}, {})

					linksFromHeader = Object.assign({}, linksFromHeader, tmp)

					if (response.ok) {
						return response.json()
					} else {
						return of({
							error: true,
							message: `Error ${response.status}`,
						})
					}
				}),
				map(result => {
					let data = null
					if(!result.error) {
						data = Object.assign({}, linksFromHeader, {users: result})
						return fetchDataSuccess(data) 						
					}					
				})
			)
		})
	)
}

export default combineEpics(fetchUserEpic)
