import React from 'react'


class FilterOptions extends React.Component {
	render() {
		return (
			<div className='d-flex flex-row justify-content-between'>
				<p className='h5 col-5 align-self-center'>{this.props.category}</p>
				<div className='btn-group col-4' role='group' aria-label='Basic example'>
					{this.props.values.map(value => 
						<button key={value} type='button' className='btn btn-danger' onClick={() => this.props.handle(this.props.param, value)} >{value}</button>
					)}
				</div>
			</div>
		)
	}	
}

export default FilterOptions


