import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import Icon from 'components/icons/Icon'

import { white } from 'constants/styles/colors'

interface Props {
	className?: string,
	colorClassName?: string,
	title: string,
	titleId: string,
}

const useStyles = createUseStyles({
	path: {
		fill: white,
	},
})

const Open: React.FC<Props> = ({
	className, colorClassName, title, titleId,
}) => {
	const classes = useStyles()
	return (
		<Icon className={className} title={title} titleId={titleId}>
			<path
				className={clsx(classes.path, colorClassName)}
				d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
			/>
		</Icon>
	)
}

export default Open
