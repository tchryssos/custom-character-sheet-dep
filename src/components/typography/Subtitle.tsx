import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles({
	subTitle: {
		fontSize: '1.5rem',
		fontWeight: 400,
	},
})

interface Props {
	children: React.ReactNode,
	className?: string,
}

const Subtitle: React.FC<Props> = ({ children, className }) => {
	const classes = useStyles()
	return (
		<h1 className={clsx(classes.subTitle, className)}>
			{children}
		</h1>
	)
}

export default Subtitle
