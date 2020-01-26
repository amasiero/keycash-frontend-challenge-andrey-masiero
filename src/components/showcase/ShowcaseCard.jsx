import React from 'react'
import Grid from '../ui/Grid'

class ShowcaseCard extends React.Component {
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
			<Grid cols='12 9 10'>
				<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
					<div className='col mb-4'>
						<div className='card'>
							<img src='https://i.imgur.com/q1Mj5mf.jpg' className='card-img-top' />
							<div className='card-body'>
								<h5 className='card-title'>{this.street('Rua Tabapuã, 56 Itaim Bibi - SP')}</h5>
						        <p className='card-text'>{this.city('Rua Tabapuã, 56 Itaim Bibi - SP')}</p>
						        <div className='d-flex flex-row'>
						        	<div className='flex-row'>
						        		<i class='fa fa-building' aria-hidden='true'></i>
						        		96 m<sup>2</sup>
						        	</div>
						        	<div className='flex-row'>
						        		<i class='fa fa-bed' aria-hidden='true'></i>
						        		2 quartos
						        	</div>
						        </div>
						        <p className='card-text text-danger font-weight-bold'> Valor: R$ {this.formatCurrency(1180000)}</p>
							</div>
						</div>
					</div>
					<div className='col mb-4'>
						<div className='card'>
							<img src='https://i.imgur.com/q1Mj5mf.jpg' className='card-img-top' />
							<div className='card-body'>
								<h5 className='card-title'>{this.street('Rua Tabapuã, 56 Itaim Bibi - SP')}</h5>
						        <p className='card-text'>{this.city('Rua Tabapuã, 56 Itaim Bibi - SP')}</p>
						        <div className='d-flex flex-row'>
						        	<div className='flex-row'>
						        		<i class='fa fa-building' aria-hidden='true'></i>
						        		96 m<sup>2</sup>
						        	</div>
						        	<div className='flex-row'>
						        		<i class='fa fa-bed' aria-hidden='true'></i>
						        		2 quartos
						        	</div>
						        </div>
						        <p className='card-text text-danger font-weight-bold'> Valor: R$ {this.formatCurrency(1180000)}</p>
							</div>
						</div>
					</div>
					<div className='col mb-4'>
						<div className='card'>
							<img src='https://i.imgur.com/q1Mj5mf.jpg' className='card-img-top' />
							<div className='card-body'>
								<h5 className='card-title'>{this.street('Rua Tabapuã, 56 Itaim Bibi - SP')}</h5>
						        <p className='card-text'>{this.city('Rua Tabapuã, 56 Itaim Bibi - SP')}</p>
						        <div className='d-flex flex-row'>
						        	<div className='flex-row'>
						        		<i class='fa fa-building' aria-hidden='true'></i>
						        		96 m<sup>2</sup>
						        	</div>
						        	<div className='flex-row'>
						        		<i class='fa fa-bed' aria-hidden='true'></i>
						        		2 quartos
						        	</div>
						        </div>
						        <p className='card-text text-danger font-weight-bold'> Valor: R$ {this.formatCurrency(1180000)}</p>
							</div>
						</div>
					</div>
					<div className='col mb-4'>
						<div className='card'>
							<img src='https://i.imgur.com/q1Mj5mf.jpg' className='card-img-top' />
							<div className='card-body'>
								<h5 className='card-title'>{this.street('Rua Tabapuã, 56 Itaim Bibi - SP')}</h5>
						        <p className='card-text'>{this.city('Rua Tabapuã, 56 Itaim Bibi - SP')}</p>
						        <div className='d-flex flex-row'>
						        	<div className='flex-row'>
						        		<i class='fa fa-building' aria-hidden='true'></i>
						        		96 m<sup>2</sup>
						        	</div>
						        	<div className='flex-row'>
						        		<i class='fa fa-bed' aria-hidden='true'></i>
						        		2 quartos
						        	</div>
						        </div>
						        <p className='card-text text-danger font-weight-bold'> Valor: R$ {this.formatCurrency(1180000)}</p>
							</div>
						</div>
					</div>
					<div className='col mb-4'>
						<div className='card'>
							<img src='https://i.imgur.com/q1Mj5mf.jpg' className='card-img-top' />
							<div className='card-body'>
								<h5 className='card-title'>{this.street('Rua Tabapuã, 56 Itaim Bibi - SP')}</h5>
						        <p className='card-text'>{this.city('Rua Tabapuã, 56 Itaim Bibi - SP')}</p>
						        <div className='d-flex flex-row'>
						        	<div className='flex-row'>
						        		<i class='fa fa-building' aria-hidden='true'></i>
						        		96 m<sup>2</sup>
						        	</div>
						        	<div className='flex-row'>
						        		<i class='fa fa-bed' aria-hidden='true'></i>
						        		2 quartos
						        	</div>
						        </div>
						        <p className='card-text text-danger font-weight-bold'> Valor: R$ {this.formatCurrency(1180000)}</p>
							</div>
						</div>
					</div>
				</div>
			      
		    </Grid>
		)
	}

}

export default ShowcaseCard