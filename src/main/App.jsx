import './custom.scss'
import './custom.css'

import React from 'react'
import Header from '../components/ui/Header'
import Showcase from '../components/showcase/Showcase'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Header />
				<Showcase />
			</div>
		)
	}
}


export default App