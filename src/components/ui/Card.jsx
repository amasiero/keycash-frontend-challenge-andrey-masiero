import React from 'react'
import Caurosel from './Caurosel'
import Button from './Button'

class Card extends React.Component {
	street(address) {
		return address.split(',')[0]
	}

	city(address) {
		return address.split(',')[1].replace(/[0-9]/g, '')
	}

	formatCurrency(value) {
		return value.toString().replace(/(?=\d)(\d{3})(\d{2})$/g, '.$1,$2')
	}

	render() {
		return (
			<div className='col mb-4'>
				<div className='card'>
					<Caurosel images={this.props.info.images} id={this.props.info.id} />
					<div className='card-body'>
						<h5 className='card-title mb-0'>{this.street(this.props.info.address.formattedAddress)}</h5>
				        <p className='card-text'>{this.city(this.props.info.address.formattedAddress)}</p>
				        <div className='d-flex flex-row'>
				        	<div className='flex-row'>
				        		<i className='fa fa-building mr-2' aria-hidden='true'></i>
				        		{this.props.info.usableArea} m<sup>2</sup>
				        	</div>
				        	<div className='flex-row ml-3'>
				        		<i className='fa fa-bed mr-2' aria-hidden='true'></i>
				        		{this.props.info.bedrooms} {this.props.info.bedrooms === 1 ? 'quarto' : 'quartos'}
				        	</div>
				        </div>
				        <div className='d-flex flex-column flex-md-row justify-content-between'>
					        <p className='card-text text-danger font-weight-bold mt-3'> Valor: R$ {this.formatCurrency(this.props.info.price)}</p>
					        <Button style='danger' icon='info-circle' label='Detalhes' />
				        </div>
					</div>
				</div>
			</div>
		)
	}
}

export default Card