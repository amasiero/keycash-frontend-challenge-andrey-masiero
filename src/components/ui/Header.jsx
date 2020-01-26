import React from 'react'
import './header.css'

class Header extends React.Component {
	render() {
		return (
			<nav id='home' className='navbar navbar-dark bg-danger'>
			  <a className='navbar-brand' href='#home'>
			    <i className='fa fa-home fa-2x mr-2'></i>
			    <span className='title'>FindHome</span>
			  </a>
			</nav>
		)
	}
}

export default Header