import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import Body from 'components/typography/Body'

const useStyles = createUseStyles({
	label: {
		display: 'flex',
		alignItems: 'center',
		width: 'fit-content',
	},
	column: {
		flexDirection: 'column',
		alignItems: 'center',
	},
})

interface Props {
	label?: string
	labelKey: string
	column?: boolean
	className?: string
	children: React.ReactNode
}

const Label: React.FC<Props> = ({
	label, column, className, children, labelKey,
}) => {
	const classes = useStyles()
	if (label) {
		return (
			<label
				htmlFor={labelKey}
				className={clsx(
					classes.label,
					{ [classes.column]: column },
					className,
				)}

			>
				<Body>
					&nbsp;
					{label}
				</Body>
				{children}
			</label>
		)
	}
	return (
		<>
			{children}
		</>
	)
}

export default Label
