import React from 'react'
import If from '../helpers/If'

class Button extends React.Component {
	render() {
		return (
			<If test={!this.props.hide}>
				<button className={'btn btn-' + this.props.type}
					onClick={this.props.onClick}>
					<If test={this.props.icon}>
						<i className={'fa fa-' + this.props.icon + ' mr-2'}></i>
					</If>
					{this.props.label}
				</button>
			</If>
		)
	}
}

export default Button