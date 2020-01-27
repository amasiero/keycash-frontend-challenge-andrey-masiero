import React from 'react'
import axios from 'axios'
import ShowcaseForm from './ShowcaseForm'
import ShowcaseCards from './ShowcaseCards'

import './showcase.css'

const URL = 'http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge'

class Showcase extends React.Component {
	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this)
		this.handleAddressFilter = this.handleAddressFilter.bind(this)
		this.state = {
			places : []
		}
	}

	refresh(address = '') {
		axios.get(URL)
			.then(res => res.data.filter(p => { 
				if(address) {
					let re = new RegExp(address, 'i')
					return p.publish && re.test(p.address.formattedAddress)
				}
				return p.publish
			}))
			.then(data => this.setState({
				...this.state,
				places : data
			}))
	}

	handleAddressFilter(event) {
		let text = event.target.value
		this.refresh(text)
	}

	handleClick(place) {
		this.props.history.push({
			pathname : '/detalhe',
			state : { 
				place : {...place}
			}
		})
	}

	componentDidMount() {
		this.refresh()
	}

	render() {
		return (
			<div className='container'>
				<ShowcaseForm onChange={this.handleAddressFilter}/>
				<ShowcaseCards places={this.state.places} onClick={this.handleClick}/>
			</div>
		)

	}
}

export default Showcase