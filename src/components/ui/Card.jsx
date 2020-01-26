import React from 'react'
import Caurosel from './Caurosel'
import Button from './Button'

import Formatter from '../helpers/helpers'

class Card extends React.Component {
	render() {
		const place = {...this.props.info}
		return (
			<div className='col mb-4'>
				<div className='card'>
					<Caurosel images={place.images} id={place.id} />
					<div className='card-body'>
						<h5 className='card-title mb-0'>{Formatter.street(place.address.formattedAddress)}</h5>
				        <p className='card-text'>{Formatter.city(place.address.formattedAddress)}</p>
				        <div className='d-flex flex-row'>
				        	<div className='flex-row'>
				        		<i className='fa fa-building mr-2' aria-hidden='true'></i>
				        		{place.usableArea} m<sup>2</sup>
				        	</div>
				        	<div className='flex-row ml-3'>
				        		<i className='fa fa-bed mr-2' aria-hidden='true'></i>
				        		{place.bedrooms} {place.bedrooms === 1 ? 'quarto' : 'quartos'}
				        	</div>
				        </div>
				        <div className='d-flex flex-column flex-md-column flex-lg-row justify-content-between'>
					        <p className='card-text text-danger font-weight-bold mt-3'> Valor: R$ {Formatter.formatCurrency(place.price)}</p>
					        <Button type='danger' icon='info-circle' label='Detalhes' onClick={() => this.props.onClick(place)}/>
				        </div>
					</div>
				</div>
			</div>
		)
	}
}

export default Card