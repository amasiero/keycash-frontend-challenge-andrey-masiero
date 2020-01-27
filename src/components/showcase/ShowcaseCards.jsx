import React from 'react'
import Card from '../ui/Card'
import Pagination from '../ui/Pagination'

class ShowcaseCards extends React.Component {
	state = { 
		currentPage : 1,
		cardsPerPage : 5
	}

	handlePaginate(number) {
		this.setState({
			...this.state,
			currentPage : number
		})
	}

	filterCards(places) {
		const indexOfLastCard = this.state.currentPage * this.state.cardsPerPage
		const indexOfFirstCard = indexOfLastCard - this.state.cardsPerPage
		const currentPlaces = places.slice(indexOfFirstCard, indexOfLastCard)
		return currentPlaces
	}

	render() {
		const places = this.props.places
		const currentPlaces = this.filterCards(places)
		const totalCards = places.length

		return (
			<div>
				<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center'>
					{currentPlaces.map((place, index)=> 
							<Card key={place.id} 
								  info={place} 
								  count={index} 
								  onClick={this.props.onClick}/>
					)}
				</div>
				<Pagination cardsPerPage={this.state.cardsPerPage} totalCards={totalCards} onClick={this.handlePaginate.bind(this)} />
			</div>
		)	
	}
}

export default ShowcaseCards