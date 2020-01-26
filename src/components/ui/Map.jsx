import React from 'react'

class Map extends React.Component {
	render() {
		const url = 'https://maps.google.com/maps?q=' + 
				this.props.geolocation.lat + ',' + 
				this.props.geolocation.lng + '&z=15&output=embed'
		return (
			<iframe title='map' src={url} style={{border : 0, width : '100%', allowfullscreen : true, frameborder : 0 }} ></iframe>
		)
	}
}

export default Map