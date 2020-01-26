import React from 'react'
import ShowcaseForm from './ShowcaseForm'
import ShowcaseCard from './ShowcaseCard'
import './showcase.css'

class Showcase extends React.Component {
	render() {
		return (
			<div className='container'>
				<ShowcaseForm />
				<ShowcaseCard />
			</div>
		)

	}
}

export default Showcase