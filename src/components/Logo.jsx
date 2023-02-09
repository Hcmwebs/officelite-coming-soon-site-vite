import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
	return (
		<div>
			<Link to='/'>
				<img src='/logo.svg' alt='Logo' />
			</Link>
		</div>
	)
}

export default Logo