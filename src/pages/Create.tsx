import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import { SheetElement } from 'types/sheet'
import ternary from 'logic/utils/ternary'

const useStyles = createUseStyles({

})

const Create: React.FC = () => {
	const classes = useStyles()
	const [sheetElements, setSheetElements] = useState<SheetElement[]>([])
	return ternary(
		!!sheetElements.length,
		<div>you picked</div>,
		<div>you need to pick</div>,
	)
}

export default Create
