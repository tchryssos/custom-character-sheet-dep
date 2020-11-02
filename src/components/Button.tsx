import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import ternary from 'logic/utils/ternary'

import Body from 'components/typography/Body'

const useStyles = createUseStyles({
	button: {
		display: 'inline-block',
		cursor: 'pointer',
	},
	invisible: {
		appearance: 'none',
		border: 'none',
		outline: 'none',
		background: 'transparent',
	},
})

interface Props {
	onClick?: () => void
	type?: 'button' | 'submit'
	className?: string
}
interface LabelProps extends Props {
	label: string
}
interface ChildrenProps extends Props {
	children: React.ReactNode
	invisible?: boolean
}

const Button: React.FC<LabelProps | ChildrenProps> = (props) => {
	const classes = useStyles()
	const { type, onClick, className } = props
	const { label } = props as LabelProps
	const { children, invisible } = props as ChildrenProps
	return (
		<button
			type={type === 'button' ? 'button' : 'submit'}
			onClick={onClick}
			className={clsx(
				classes.button,
				{
					[classes.invisible]: invisible,
				},
				className,
			)}
		>
			{ternary(
				!!label,
				<Body>{label}</Body>,
				children,
			)}
		</button>
	)
}

export default Button
