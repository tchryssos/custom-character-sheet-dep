import { createUseStyles } from 'react-jss'

export const marPadZero = {
	margin: 0,
	padding: 0,
}
export const baseStyle = {
	height: '100%',
	width: '100%',
	fontFamily: 'sans-serif',
	...marPadZero,
}


export default createUseStyles({
	// To import fonts uncomment line below and add url
	// '@import': '',
	'@global': {
		html: {
			...baseStyle,
			fontSize: '100%',
		},
		body: {
			...baseStyle,
			position: 'relative',
		},
		'#app': baseStyle,
		div: {
			boxSizing: 'border-box',
		},
		a: {
			boxSizing: 'border-box',
		},
		p: marPadZero,
		h1: marPadZero,
		h2: marPadZero,
		h3: marPadZero,
	},
})
