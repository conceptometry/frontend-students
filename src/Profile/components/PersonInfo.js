import { Backdrop, Modal, Grow } from '@material-ui/core';
import { useState } from 'react';
import { useStyles } from '../../styles/MaterialUI-theme';
import { Form, FormButton, FormInput, FormLabel } from '../../styles/Form';
import {
	EditProfileInfo,
	PersonInfoContainer,
	PersonInfoTable,
	PersonInfoTableData,
	PersonInfoTableHeading,
	PersonInfoTableRow,
} from '../styles/PersonInfo';

const PersonInfo = () => {
	const classes = useStyles();
	const [modalOpen, setModalOpen] = useState(false);
	const handleEditInfoModal = () => {
		if (modalOpen === true) {
			setModalOpen(false);
		} else {
			setModalOpen(true);
		}
	};
	const updateInfo = (e) => {
		e.preventDefault();
		handleEditInfoModal();
	};
	return (
		<PersonInfoContainer>
			<PersonInfoTable>
				<tbody>
					<PersonInfoTableRow>
						<PersonInfoTableHeading pt>Name</PersonInfoTableHeading>
						<PersonInfoTableData pt>Yashraj</PersonInfoTableData>
					</PersonInfoTableRow>
					<PersonInfoTableRow>
						<PersonInfoTableHeading>Email</PersonInfoTableHeading>
						<PersonInfoTableData>yashrajpahwa@gmail.com</PersonInfoTableData>
					</PersonInfoTableRow>
					<PersonInfoTableRow>
						<PersonInfoTableHeading>Phone</PersonInfoTableHeading>
						<PersonInfoTableData>9999395665</PersonInfoTableData>
					</PersonInfoTableRow>
					<PersonInfoTableRow>
						<PersonInfoTableHeading pb>Subject</PersonInfoTableHeading>
						<PersonInfoTableData pb>Maths, Science</PersonInfoTableData>
					</PersonInfoTableRow>
				</tbody>
			</PersonInfoTable>

			<EditProfileInfo onClick={handleEditInfoModal}>
				Edit Information
			</EditProfileInfo>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={modalOpen}
				onClose={handleEditInfoModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Grow in={modalOpen}>
					<div className={classes.paper}>
						<h2 style={{ textAlign: 'center' }}>Edit Information</h2>
						<Form flex flexCol w100 onSubmit={updateInfo}>
							<FormLabel flex start>
								Name
							</FormLabel>
							<FormInput
								border
								flex
								style={{ width: '60vh' }}
								placeholder='Name'
							/>
							<FormLabel mt flex start>
								Name
							</FormLabel>
							<FormInput
								border
								flex
								style={{ width: '60vh' }}
								placeholder='Name'
							/>
							<FormLabel mt flex start>
								Name
							</FormLabel>
							<FormInput
								border
								flex
								style={{ width: '60vh' }}
								placeholder='Name'
							/>
							<FormLabel mt flex start>
								Name
							</FormLabel>
							<FormInput
								border
								flex
								style={{ width: '60vh' }}
								placeholder='Name'
							/>

							<FormButton type='submit' borderDark w100>
								Update
							</FormButton>
						</Form>
					</div>
				</Grow>
			</Modal>
		</PersonInfoContainer>
	);
};

export default PersonInfo;
