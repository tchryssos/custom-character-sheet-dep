import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import assocPath from 'ramda/src/assocPath'
import path from 'ramda/src/path'

import { SetFormVals, FormVals, InputChangeEvent } from 'types/sheet'

const useStyles = createUseStyles({
	input: {
		padding: 4,
	},
})

interface Props {
	label: string,
	min?: number,
	max?: number,
	readOnly?: boolean,
	type: 'checkbox' | 'text',
	className?: string,
}

interface StandardProps extends Props {
	setFormVals: SetFormVals,
	formVals: FormVals,
	valPath: string[],
}
interface OverrideProps extends Props {
	setOverride: (formVals: any) => void,
	valOverride: string | number
}

const Input: React.FC<StandardProps | OverrideProps> = (props) => {
	const classes = useStyles()
	const {
		label, min, max,
		readOnly, type, className
	} = props
	const { setFormVals, formVals, valPath } = props as StandardProps
	const { setOverride, valOverride } = props as OverrideProps
	
	const onChange = (e: InputChangeEvent) => {
		const value = type === 'checkbox' ? 'checked' : 'value'
		if (setOverride) {
			setOverride(e.target.value)
		} else {
			setFormVals(assocPath(valPath, e.target[value], formVals))
		}
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
			name={valPath ? valPath.join('-') : label}
			value={valOverride ? valOverride : path(valPath, formVals)}
			onChange={onChange}
			readOnly={readOnly}
		/>
	)
}

export default Input
