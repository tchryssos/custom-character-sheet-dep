import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import { SHEET_ELEMENTS } from 'constants/game/sheetElements'

const useStyles = createUseStyles({

})

interface Props {
	setSheetElements: (ids: string[]) => void,
}

const ElementSelectForm: React.FC<Props> = ({ setSheetElements }) => {
	const classes = useStyles()
	const [selectedElements, setSelectedElements] = useState<string[]>([])
	return (
		<form>

		</form>
	)
}
