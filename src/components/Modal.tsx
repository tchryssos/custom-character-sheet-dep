import React from 'react'
import { createUseStyles } from 'react-jss'

import orNull from 'logic/utils/orNull'

const useStyles = createUseStyles({
	modal: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '75%',
		padding: 8,
	},
	xRow: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
	},
})

interface Props {
	isVisible: boolean
	setIsVisible: (isVisible: false) => void
	children: React.ReactNode
}

const Modal: React.FC<Props> = ({ isVisible, setIsVisible, children }) => {
	const classes = useStyles()
	return orNull(
		isVisible,
		<div className={classes.modal}>
			<div className={classes.xRow}>

			</div>
			{children}
		</div>,
	)
}

export default Modal
