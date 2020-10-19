import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles({
	caption: {
		fontSize: '0.75rem',
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

const Caption: React.FC<Props> = ({ bold, children, className }) => {
	const classes = useStyles()
	return (
		<p
			className={clsx(
				classes.caption,
				{ [classes.bold]: bold },
				className,
			)}
		>
			{children}
		</p>
	)
}

export default Caption
