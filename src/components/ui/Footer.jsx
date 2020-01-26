import React from 'react'
import './footer.css'

class Footer extends React.Component {
	render() {
		return (
			<footer className='d-flex justify-content-center'>
			    <p className='py-4'>
			      Made with <span className='heart'>&#10084;</span> by Andrey Masiero &#169; 2020
			    </p>
		  	</footer>
		)
	}
}

export default Footer