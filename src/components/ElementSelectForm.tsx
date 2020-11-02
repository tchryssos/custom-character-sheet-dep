import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import { SHEET_ELEMENTS_BY_TAG } from 'constants/game/sheetElements'
import { InputChangeEvent } from 'types/sheet'
import capitalize from 'logic/utils/capitalize'

import CheckboxInput from 'components/form/CheckboxInput'
import Body from 'components/typography/Body'

const useStyles = createUseStyles({
	elementOptionWrapper: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
	},
	tagLabel: {
		marginLeft: 6,
		marginTop: 16,
		height: 24,
		display: 'flex',
		alignItems: 'center',
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
				{Object.keys(SHEET_ELEMENTS_BY_TAG).map(
					(tag) => (
						<>
							<div className={classes.tagLabel}>
								<Body bold>{capitalize(tag)}</Body>
							</div>
							{SHEET_ELEMENTS_BY_TAG[tag].map(
								({ id, label }) => (
									<CheckboxInput
										setOverride={addToSelected}
										valOverride={id}
										label={label}
										key={id}
									/>
								),
							)}
						</>
					),
				)}
			</div>
		</form>
	)
}

export default ElementSelectForm
