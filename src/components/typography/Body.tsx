import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles({
	body: {
		fontSize: '1rem',
	},
	bold: {
		fontWeight: 600,
	},
})

interface Props {
	children: React.ReactNode,
	className?: string,
	bold?: boolean,
}

const Body: React.FC<Props> = ({ bold, children, className }) => {
	const classes = useStyles()
	return (
		<p
			className={clsx(
				classes.body,
				{ [classes.bold]: bold },
				className,
			)}
		>
			{children}
		</p>
	)
}

export default Body
