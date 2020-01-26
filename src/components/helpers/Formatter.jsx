class Formatter {
	static street(address) {
		return address.split(',')[0]
	}

	static city(address) {
		return address.split(',')[1].replace(/[0-9]/g, '')
	}

	static formatCurrency(value) {
		return value.toString().replace(/(?=\d)(\d{3})(\d{2})$/g, '.$1,$2')
	}
}

export default Formatter