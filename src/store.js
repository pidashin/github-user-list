import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './rootEpic'
import rootReducer from './reducer'

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(epicMiddleware))
	)

	epicMiddleware.run(rootEpic)

	return store
}

const store = configureStore()

export default store
