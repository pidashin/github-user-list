import { combineEpics } from 'redux-observable'
import usersEpics from './users/epics'
import defailEpics from './detail/epics'

export default combineEpics(usersEpics, defailEpics)
