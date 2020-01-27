import React from 'react'
import axios from 'axios'

import Filter from '../filter/Filter'
import ShowcaseForm from './ShowcaseForm'
import ShowcaseCards from './ShowcaseCards'

import './showcase.css'

const URL = 'http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge'

class Showcase extends React.Component {
	state = {
		places : [],
		filters : {
			bathrooms : '',
			bedrooms : '',
			parkingSpaces : '',
			resultsPerPage : 5
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

	updatePlaces() {
		axios.get(URL)
			.then(res => res.data.filter(p => { 
				if(this.state.filters.bedrooms) {
					return p.publish && p.bedrooms === this.state.filters.bedrooms
				}
				return p.publish
			}))
			.then(data => data.filter(p => { 
				if(this.state.filters.bathrooms) {
					return p.publish && p.bathrooms === this.state.filters.bathrooms
				}
				return p.publish
			}))
			.then(data => data.filter(p => { 
				if(this.state.filters.parkingSpaces) {
					return p.publish && p.parkingSpaces === this.state.filters.parkingSpaces
				}
				return p.publish 
			}))
			.then(data => this.setState({
				...this.state,
				places : data
			}))
	}

	handleClear() {
		const filters = {
			bathrooms : '',
			bedrooms : '',
			parkingSpaces : '',
			resultsPerPage : 5
		}

		this.setState({
			...this.state,
			filters : {...filters}
		})
		this.updatePlaces()
	}

	handlePaginate(parameter, value) {
		let filters = {
			...this.state.filters,
			resultsPerPage : value
		}
		this.setState({
			...this.state,
			filters : {...filters}
		})
	}

	handleFilter(parameter, value) {
		let filter = {...this.state.filters}
		filter[parameter] = value

		this.setState({
			...this.state,
			filters : {...filter}
		})

		this.updatePlaces()
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
				<ShowcaseForm onChange={this.handleAddressFilter.bind(this)}/>
				<Filter handleFilter={this.handleFilter.bind(this)} 
						handleClear={this.handleClear.bind(this)} 
						handlePaginate={this.handlePaginate.bind(this)}/>
				<hr />
				<ShowcaseCards places={this.state.places} 
							   onClick={this.handleClick.bind(this)} 
							   resultsPerPage={this.state.filters.resultsPerPage}/>
			</div>
		)

	}
}

export default Showcase