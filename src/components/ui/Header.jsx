import React from 'react'
import './header.css'

class Header extends React.Component {
	render() {
		return (
			<nav className='navbar navbar-dark bg-danger'>
			  <a className='navbar-brand' href='/'>
			    <i className='fa fa-home fa-2x mr-2'></i>
			    <span className='title'>KeyCash</span>
			  </a>
			</nav>
		)
	}
}

export default Header