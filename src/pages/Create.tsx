import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import ternary from 'logic/utils/ternary'

import ElementSelectForm from 'components/ElementSelectForm'

const useStyles = createUseStyles({

})

const Create: React.FC = () => {
	// const classes = useStyles()
	const [sheetElements, setSheetElements] = useState<string[]>([])
	return ternary(
		!!sheetElements.length,
		<div>you picked</div>,
		<ElementSelectForm setSheetElements={setSheetElements} />,
	)
}

export default Create
