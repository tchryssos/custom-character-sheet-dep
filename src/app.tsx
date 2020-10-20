import React from 'react'
import { render } from 'react-dom'
import {
	BrowserRouter, Route, Switch, withRouter,
} from 'react-router-dom'
import { HOME_PATH, CREATE_PATH, SHEET_PATH } from 'constants/routes'
import Home from 'pages/Home'
import Create from 'pages/Create'
import Sheet from 'pages/Sheet'
import useGlobalStyles from 'logic/hooks/useGlobalStyles'
import disableDevTools from 'logic/utils/disableDevTools'

if (process.env.NODE_ENV === 'production') {
	disableDevTools()
}

interface AppProps {
	location: {
		pathname: string,
	},
}

const App: React.FC<AppProps> = ({ location: { pathname } }) => {
	// Create global effects or state here
	// with access to router location
	useGlobalStyles()
	return (
		<>
			<Switch>
				<Route path={HOME_PATH} exact component={Home} />
				<Route path={CREATE_PATH} component={Create} />
				<Route path={SHEET_PATH} exact component={Sheet} />
			</Switch>
			{/* NavBar?? */}
		</>
	)
}

const RouterApp = withRouter(({ location }) => <App location={location} />)

render(
	<BrowserRouter>
		<RouterApp />
	</BrowserRouter>,
	document.getElementById('app'),
)
