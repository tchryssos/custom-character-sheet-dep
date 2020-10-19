import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'

import { CREATE_PATH, SHEET_PATH } from 'constants/routes'
import { black } from 'constants/styles/colors'

import Title from 'components/typography/TItle'

const useStyles = createUseStyles({
	linkWrapper: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	link: {
		padding: 8,
		margin: [[16, 8]],
		border: [[1, 'solid', black]],
		borderRadius: 4,
		textDecoration: 'none',
		color: black,
	},
})

const Home: React.FC = () => {
	const classes = useStyles()
	return (
		<div className={classes.linkWrapper}>
			<NavLink
				className={classes.link}
				exact
				to={CREATE_PATH}
			>
				<Title>Create a new sheet template</Title>
			</NavLink>
			<NavLink
				className={classes.link}
				exact
				to={SHEET_PATH}
			>
				<Title>Use a sheet code</Title>
			</NavLink>
		</div>
	)
}

export default Home
