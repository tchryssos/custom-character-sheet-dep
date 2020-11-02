import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import ternary from 'logic/utils/ternary'

import ElementSelectForm from 'components/modals/ElementSelectFormModal'

const useStyles = createUseStyles({

})

const Create: React.FC = () => {
	// const classes = useStyles()
	const [modalVisible, setModalVisible] = useState<boolean>(false)
	const [sheetElements, setSheetElements] = useState<string[]>([])
	return ternary(
		!!sheetElements.length,
		<div>you picked</div>,
		<ElementSelectForm
			setSheetElements={setSheetElements}
			isVisible={modalVisible}
			setIsVisible={setModalVisible}
		/>,
	)
}

export default Create
