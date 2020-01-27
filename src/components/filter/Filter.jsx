import React from 'react'

import FilterOptions from './FilterOptions'
import Button from '../ui/Button'

class Filter extends React.Component {
	render() {
		return (
			<div>
				<p>
					<button  className='btn btn-danger' data-toggle='collapse' data-target='#filters-config' aria-expanded='false' aria-controls='filters-config'>
						<i className='fa fa-sliders mr-2'></i>
						Filtros
					</button>
				</p>
				<div className="row">
				  <div className="col">
				    <div className="collapse" id="filters-config">
				      <div className="card card-body">
				      	<hr />
				        <FilterOptions category={'Dormitórios'} values={[1, 2]} handle={this.props.handleFilter} param={'bedrooms'} />
				        <hr />
				        <FilterOptions category={'Banheiros'} values={[1, 2]} handle={this.props.handleFilter} param={'bathrooms'} />
				        <hr />
				        <FilterOptions category={'Vagas'} values={[1, 2]} handle={this.props.handleFilter} param={'parkingSpaces'} />
				        <hr />
				        <FilterOptions category={'Resultados por página'} values={[5, 10, 15]} handle={this.props.handlePaginate} param={'paginate'}/>
				        <hr />
				        <Button type='danger' icon='minus-square-o' label='Limpar Filtros' onClick={() => this.props.handleClear()}/>
				        <hr />
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		)
	}	
}

export default Filter