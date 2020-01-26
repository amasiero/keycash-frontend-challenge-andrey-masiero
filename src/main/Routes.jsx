import React from 'react'
import { BrowserRouter as Router, 
		 Route, 
		 Switch,
		 Redirect } from 'react-router-dom'

import Showcase from '../components/showcase/Showcase'
import Details from '../components/details/Details'

class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={Showcase} />
					<Route path='/detalhe' component={Details} />
					<Redirect from='*' to='/' />
				</Switch>
			</Router>
		)
	}

}

export default Routes