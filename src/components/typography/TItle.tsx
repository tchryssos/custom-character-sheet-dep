import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles({
	title: {
		fontSize: '2rem',
		fontWeight: 400,
	},
})

interface Props {
	children: React.ReactNode,
	className?: string,
}

const Title: React.FC<Props> = ({ children, className }) => {
	const classes = useStyles()
	return (
		<h1 className={clsx(classes.title, className)}>
			{children}
		</h1>
	)
}

export default Title
