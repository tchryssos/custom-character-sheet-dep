import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import { SHEET_ELEMENTS } from 'constants/game/sheetElements'
import { InputChangeEvent } from 'types/sheet'

import CheckboxInput from 'components/form/CheckboxInput'
import Body from 'components/typography/Body'

const useStyles = createUseStyles({
	elementOptionWrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
})

interface Props {
	setSheetElements: (ids: string[]) => void,
}

const emptyElements: [] = []
const ElementSelectForm: React.FC<Props> = ({ setSheetElements }) => {
	const classes = useStyles()
	const [selectedElements, setSelectedElements] = useState<string[]>(emptyElements)
	const addToSelected = (e: InputChangeEvent) => {
		if (e.target.checked) {
			setSelectedElements([...selectedElements, e.target.value])
		} else {
			setSelectedElements(selectedElements.filter(
				(elId) => elId !== e.target.value,
			))
		}
	}
	return (
		<form>
			<div className={classes.elementOptionWrapper}>
				<Body>Which of the following fields do you want on your sheet?</Body>
				{SHEET_ELEMENTS.map(
					({ id, label }) => (
						<CheckboxInput
							setOverride={addToSelected}
							valOverride={id}
							label={label}
							key={id}
						/>
					),
				)}
			</div>
		</form>
	)
}

export default ElementSelectForm
