import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import { SHEET_ELEMENTS_BY_TAG } from 'constants/game/sheetElements'
import { InputChangeEvent } from 'types/sheet'
import capitalize from 'logic/utils/capitalize'

import Modal from 'components/modals/Modal'
import CheckboxInput from 'components/form/CheckboxInput'
import Body from 'components/typography/Body'
import Button from 'components/Button'

const useStyles = createUseStyles({
	elementOptionWrapper: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
	},
	tagLabel: {
		marginLeft: 4,
		marginTop: 16,
		height: 24,
		display: 'flex',
		alignItems: 'center',
	},
})

interface Props {
	setSheetElements: (ids: string[]) => void,
	isVisible: boolean,
	setIsVisible: (isVisible: boolean) => void
}

const emptyElements: [] = []
const ElementSelectForm: React.FC<Props> = ({ setSheetElements, isVisible, setIsVisible }) => {
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
		<Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
			<form>
				<div className={classes.elementOptionWrapper}>
					<Body>Which of the following fields do you want on your sheet?</Body>
					{Object.keys(SHEET_ELEMENTS_BY_TAG).map(
						(tag) => (
							<div key={tag}>
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
							</div>
						),
					)}
				</div>
				<Button
					label="Submit"
					type="submit"
					onClick={() => setSheetElements(selectedElements)}
				/>
			</form>
		</Modal>
	)
}

export default ElementSelectForm
