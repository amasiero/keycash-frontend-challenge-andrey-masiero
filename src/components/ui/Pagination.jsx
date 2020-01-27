import React from 'react'

class Pagination extends React.Component {
	
	getPageNumbers(cardsPerPage, totalCards) {
		const numbers = []
		for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
			numbers.push(i)
		}
		return numbers
	}

	render() {
		const cardsPerPage = this.props.cardsPerPage
		const totalCards = this.props.totalCards
		const pageNumbers = this.getPageNumbers(cardsPerPage, totalCards)
		return (
			<nav id='pages'>
				<ul className='pagination justify-content-center'>
					{pageNumbers.map(number => (
						<li key={number} className='page-item'>
							<a onClick={() => this.props.onClick(number)} href='#pages' className='page-link text-danger'>
								{number}
							</a>
						</li>
					))}
				</ul>
			</nav>
		)
	}
}

export default Pagination