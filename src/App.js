import React from 'react'

import {Route, Router, IndexRoute, useRouterHistory, browserHistory, hashHistory} from 'react-router'

import { syncHistoryWithStore } from 'react-router-redux'

import { Provider } from 'react-redux'

import store from './store'

import MainContainer from './containers/Main'

import Create from './components/Create/Create'
import Explore from './components/Explore/Explore'
import Presets from './components/Presets/Presets'
import Export from './components/Export/Export'

import DevTools from './containers/DevTools'

const appHistory = hashHistory


const history = syncHistoryWithStore(appHistory, store)

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<Router history={history}>
					<Route path="/" component={MainContainer}>
						<IndexRoute name="create" component={Create}></IndexRoute>
						<Route name="create" path="create" component={Create}></Route>
						<Route name="explore" path="explore" component={Explore}></Route>
						<Route name="presets" path="presets" component={Presets}></Route>
						<Route name="export" path="export" component={Export}></Route>
					</Route>
				</Router>
				{(process.env.NODE_ENV !== "production") && <DevTools/> }
			</div>
		</Provider>
	)
}

export default App
