import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Users from './users/containers/index'
import Detail from './detail/containers/index'
import { ReactComponent as SVG } from './assets/icon.svg'
import './App.css'

function App() {
	return (
		<div className="App">
			<SVG />
			<Router>
				<Switch>
					<Route exact path="/">
						<Users />
					</Route>
					<Route path="/detail/:userName">
						<Detail />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
