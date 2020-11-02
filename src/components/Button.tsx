import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles({
	button: {
		display: 'inline-block',
		cursor: 'pointer',
	},
})

interface Props {
	label: string
	onClick?: () => void
	type?: 'button' | 'submit'
	className?: string
}

const Button: React.FC<Props> = ({
	label, type = 'button', onClick, className,
}) => {
	const classes = useStyles()
	return (
		<button
			type={type === 'button' ? 'button' : 'submit'}
			onClick={onClick}
			className={clsx(
				classes.button,
				className,
			)}
		>
			{label}
		</button>
	)
}

export default Button
