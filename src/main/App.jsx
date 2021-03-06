import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './custom.css'

import 'jquery/dist/jquery.min'
import 'bootstrap/js/dist/carousel'
import 'bootstrap/js/dist/collapse'

import React from 'react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import Routes from './Routes'

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Routes />
				<Footer />
			</div>
		)
	}
}


export default App