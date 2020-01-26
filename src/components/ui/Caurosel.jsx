import React from 'react'

class Caurosel extends React.Component {
	renderList() {
		const list = this.props.images || []
		return list.map((image, index) => {
			let active = index === 0 ? 'active' : ''
			return (
				<li key={index.toString()} 
					data-target={`#card-${this.props.id.toString()}`} 
					data-slide-to={index} 
					className={active}></li>
			)
		})
	}

	renderImages() {
		const list = this.props.images || []
		return list.map((image, index) => {
			let classes = index === 0 ? 'carousel-item active' : 'carousel-item'
			return (
					<div key={index.toString()} className={classes}>
				      <img className='d-block w-100' src={image} alt='Inside home' />
				    </div>
				)
		})
	}

	render() {
		return (
			<div id={`card-${this.props.id.toString()}`} className='carousel slide' data-ride='carousel'>
			  <ol className='carousel-indicators'>
			    {this.renderList()}
			  </ol>
			  <div className='carousel-inner'>
			    {this.renderImages()}
			  </div>
			  <a className='carousel-control-prev' href={`#card-${this.props.id.toString()}`} role='button' data-slide='prev'>
			    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
			    <span className='sr-only'>Previous</span>
			  </a>
			  <a className='carousel-control-next' href={`#card-${this.props.id.toString()}`} role='button' data-slide='next'>
			    <span className='carousel-control-next-icon' aria-hidden='true'></span>
			    <span className='sr-only'>Next</span>
			  </a>
			</div>
		)
	}
}

export default Caurosel