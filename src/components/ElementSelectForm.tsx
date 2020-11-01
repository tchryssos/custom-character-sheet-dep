import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import { SHEET_ELEMENTS } from 'constants/game/sheetElements'
import { InputChangeEvent } from 'types/sheet'

import CheckboxInput from './form/CheckboxInput'

const useStyles = createUseStyles({

})

interface Props {
	setSheetElements: (ids: string[]) => void,
}

const ElementSelectForm: React.FC<Props> = ({ setSheetElements }) => {
	// const classes = useStyles()
	const [formVals, setFormVals] = useState<string[]>([])
	const addToSelected = (id: string) => (e: InputChangeEvent) => {
		console.log(e.target.value)
	}
	return (
		<form>
			{SHEET_ELEMENTS.map(
				({ id, label }) => (
					<CheckboxInput
						setOverride={addToSelected(id)}
						valOverride={id}
						label={label}
						key={id}
					/>
				),
			)}
		</form>
	)
}

export default ElementSelectForm
