import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import { SheetElement } from 'types/sheet'
import { SHEET_ELEMENTS } from 'constants/game/sheetElements'
import ternary from 'logic/utils/ternary'

const useStyles = createUseStyles({

})

const Create: React.FC = () => {
	const classes = useStyles()
	const [selectedElements, setSelectedElements] = useState<SheetElement[]>([])
	return ternary(
		!!selectedElements.length,
		<div>you picked</div>,
		<div>you need to pick</div>,
	)
}

export default Create
