import React from 'react'
import { createUseStyles } from 'react-jss'

import { InputProps, InputStandardProps, InputOverrideProps } from 'types/sheet'

import Input from 'components/form/Input'

const useStyles = createUseStyles({
	checkbox: {
		height: 24,
		width: 24,
	},
})

const CheckboxInput: React.FC<InputProps> = (props) => {
	const { label } = props
	const { setFormVals, formVals, valPath } = props as InputStandardProps
	const { setOverride, valOverride } = props as InputOverrideProps
	const classes = useStyles()
	return (
		<Input
			type="checkbox"
			formVals={formVals}
			valPath={valPath}
			setFormVals={setFormVals}
			label={label}
			setOverride={setOverride}
			valOverride={valOverride}
			className={classes.checkbox}
		/>
	)
}

export default CheckboxInput
