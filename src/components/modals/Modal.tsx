import React from 'react'
import { createUseStyles } from 'react-jss'

import orNull from 'logic/utils/orNull'

import { dimmed, white, black } from 'constants/styles/colors'

import Button from 'components/Button'
import X from 'components/icons/X'

const useStyles = createUseStyles({
	modalArea: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: dimmed,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modal: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '75%',
		maxHeight: '100%',
		padding: 16,
		backgroundColor: white,
	},
	xRow: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
	},
	x: {
		fill: black,
	},
	xIcon: {
		height: 24,
		width: 24,
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
		<div className={classes.modalArea}>
			<div className={classes.modal}>
				<div className={classes.xRow}>
					<Button onClick={onClose} invisible>
						<X
							title="Close modal"
							titleId="modalCloseId"
							colorClassName={classes.x}
							className={classes.xIcon}
						/>
					</Button>
				</div>
				{children}
			</div>
		</div>,
	)
}

export default Modal
