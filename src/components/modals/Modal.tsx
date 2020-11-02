import React from 'react'
import { createUseStyles } from 'react-jss'

import orNull from 'logic/utils/orNull'

import Button from 'components/Button'
import X from 'components/icons/X'

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
	onClose: () => void
	children: React.ReactNode
}

const Modal: React.FC<Props> = ({ isVisible, onClose, children }) => {
	const classes = useStyles()
	return orNull(
		isVisible,
		<div className={classes.modal}>
			<div className={classes.xRow}>
				<Button onClick={onClose} invisible>
					<X title="Close modal" titleId="modalCloseId" />
				</Button>
			</div>
			{children}
		</div>,
	)
}

export default Modal
