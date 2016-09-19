import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import DevTools from '../containers/DevTools'

const store = createStore(
	reducers,
	DevTools.instrument()
)

export default store