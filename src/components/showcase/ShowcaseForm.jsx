import React from 'react'
import Grid from '../ui/Grid'

class ShowcaseForm extends React.Component {
	render() {
		return (
			<div role='form' className='showcase-form'>
				<Grid cols='12 9 10'>
					<div className='input-group'>
						<div className='input-group-prepend'>
							<span className='input-group-text'>
								<i className='fa fa-search'></i>
							</span>
						</div>
						<input type='text' className='form-control' id='location' placeholder='Busque pela localização desejada'/>
					</div>
				</Grid>
			</div>
		)
	}
}

export default ShowcaseForm