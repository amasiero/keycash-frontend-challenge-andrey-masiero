import React from 'react'

class Thumb extends React.Component {
	render() {
		return (
			<div className='d-flex flex-column align-items-center justify-content-center col-3'>
				<h3>
					<i className={'fa fa-' + this.props.icon + ' mr-2 text-danger'} aria-hidden='true'></i>
				</h3>
				<h6 className='text-danger' >
					<div dangerouslySetInnerHTML={{ __html: this.props.label }} />
				</h6>
			</div>
		)
	}
}

export default Thumb