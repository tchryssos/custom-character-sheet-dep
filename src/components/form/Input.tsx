import React, { FormEvent } from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	input: {
		padding: 4,
	},
})

interface Props {
	valPath: string[],
	formVals: {
		[key: string]: any,
	},
	setFormVals: (formVals: { [key: string]: any }) => void,
	label: string,
	min?: number,
	max?: number,
	readOnly?: boolean,
	type: string,
	className?: string,
}

const Input: React.FC<Props> = ({
	valPath, formVals, label, min, max,
	readOnly, type, className,
}) => {
	const classes = useStyles()
	const onChange = (e: FormEvent) => {
		const value = type === 'checkbox' ? 'checked' : 'value'
		// setFormVals({...formVals, })
		// setFormVals(assocPath(formPath, e.target[value], formVals))
	}

	return (
		<input
			type={type}
			min={min}
			max={max}
			className={clsx(
				classes.input,
				className,
			)}
			name={valPath.join('-')}
			// value={}
			onChange={onChange}
			readOnly={readOnly}
		/>
	)
}

export default Input
