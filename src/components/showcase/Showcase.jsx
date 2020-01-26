import React from 'react'
import ShowcaseForm from './ShowcaseForm'
import ShowcaseCards from './ShowcaseCards'
import './showcase.css'

class Showcase extends React.Component {
	constructor() {
		super()
		this.state = {
			places : []
		}
	}

	componentDidMount() {
		fetch('http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge')
			.then(response => response.json())
			.then(json => json.filter(p => p.publish))
			.then(filter => this.setState({
				places : filter
			}))
	}

	render() {
		return (
			<div className='container'>
				<ShowcaseForm />
				<ShowcaseCards places={this.state.places}/>
			</div>
		)

	}
}

export default Showcase