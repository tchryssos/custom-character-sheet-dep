import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import ternary from 'logic/utils/ternary';

import Button from 'components/Button';
import ElementSelectForm from 'components/modals/ElementSelectFormModal';

const useStyles = createUseStyles({});

const Create: React.FC = () => {
	// const classes = useStyles()
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [sheetElements, setSheetElements] = useState<string[]>([]);
	return ternary(
		Boolean(sheetElements.length),
		<div>you picked</div>,
		<>
			<Button label="Create new sheet" onClick={() => setModalVisible(true)} />
			<ElementSelectForm
				setSheetElements={setSheetElements}
				isVisible={modalVisible}
				setIsVisible={setModalVisible}
			/>
		</>,
	);
};

export default Create;
