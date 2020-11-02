import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import assocPath from 'ramda/src/assocPath'
import path from 'ramda/src/path'

import { SetFormVals, FormVals, InputChangeEvent } from 'types/sheet'

import Label from 'components/form/Label'

const useStyles = createUseStyles({
	input: {
		padding: 4,
	},
})

interface Props {
	label?: string
	labelKey?: string
	min?: number
	max?: number
	readOnly?: boolean
	type: 'checkbox' | 'text'
	className?: string
}

interface StandardProps extends Props {
	setFormVals: SetFormVals
	formVals: FormVals
	valPath: string[]
}
interface OverrideProps extends Props {
	setOverride: (formVals: any) => void
	valOverride: string | number
}

const Input: React.FC<StandardProps | OverrideProps> = (props) => {
	const classes = useStyles()
	const {
		label, labelKey, min, max,
		readOnly, type, className,
	} = props
	const { setFormVals, formVals, valPath } = props as StandardProps
	const { setOverride, valOverride } = props as OverrideProps

	const onChange = (e: InputChangeEvent) => {
		const value = type === 'checkbox' ? 'checked' : 'value'
		if (setOverride) {
			setOverride(e)
		} else {
			setFormVals(assocPath(valPath, e.target[value], formVals))
		}
	}

	const value = valOverride || path(valPath, formVals)

	return (
		<Label label={label} labelKey={labelKey || String(value)}>
			<input
				type={type}
				min={min}
				max={max}
				className={clsx(
					classes.input,
					className,
				)}
				name={valPath ? valPath.join('-') : label}
				value={value}
				onChange={onChange}
				readOnly={readOnly}
			/>
		</Label>
	)
}

export default Input
