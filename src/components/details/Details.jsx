import React from 'react'
import { Link } from 'react-router-dom'

import Caurosel from '../ui/Caurosel'
import Grid from '../ui/Grid'
import Map from '../ui/Map'
import Thumb from '../ui/Thumb'
import Formatter from '../helpers/helpers'
import './details.css'

class Details extends React.Component {
	render() {
		const place = {...this.props.location.state.place}
		return (
			<div className='container'>
				<Grid cols='12'>
					<div className='w-70'>
						<Caurosel images={place.images} id={place.id} />
					</div>
					<div className='py-4'>
						<Link to='/'>
							<h6 className='text-secondary'><i className='fa fa-angle-left mr-1'></i> Voltar para home</h6>
						</Link>
						<hr />
						<h3>{place.address.formattedAddress}</h3>
						<div className='d-flex flex-row justify-content-between mt-5'>
							<p className='h4 text-danger'>Valor do Aluguel</p>
							<h4 className='text-danger'>R$ {Formatter.formatCurrency(place.price)}</h4>
						</div>
						<hr />
						<div className='d-flex flex-row col-12'>
							<Thumb icon='building' label={place.usableArea + ' m<sup>2</sup>'} />
							<Thumb icon='bed' label={`${place.bedrooms} ${place.bedrooms === 1 ? 'quarto' : 'quartos'}`} />
							<Thumb icon='shower' label={`${place.bathrooms} ${place.bathrooms === 1 ? 'banheiro' : 'banheiros'}`} />
							<Thumb icon='car' label={`${place.parkingSpaces} ${place.parkingSpaces === 1 ? 'vaga' : 'vagas'}`} />
						</div>
					</div>
					<hr />
					<h4>Localização</h4>
					<Map geolocation={place.address.geolocation} />
				</Grid>
			</div>
		)
	}
}

export default Details