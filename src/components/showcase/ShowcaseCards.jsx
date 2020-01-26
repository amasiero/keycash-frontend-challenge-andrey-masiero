import React from 'react'
import Card from '../ui/Card'

class ShowcaseCards extends React.Component {
	render() {
		return (
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
				{this.props.places.map((place, index)=> 
						<Card key={place.id} info={place}  count={index}/>
				)}
			</div>			      
		)
	}

}

export default ShowcaseCards