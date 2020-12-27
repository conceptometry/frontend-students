import {
	EditProfileInfo,
	PersonInfoContainer,
	PersonInfoTable,
	PersonInfoTableData,
	PersonInfoTableHeading,
	PersonInfoTableRow,
} from '../styles/PersonInfo';

const PersonInfo = () => {
	return (
		<PersonInfoContainer>
			<PersonInfoTable>
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
			</PersonInfoTable>

			<EditProfileInfo>Edit Information</EditProfileInfo>
		</PersonInfoContainer>
	);
};

export default PersonInfo;
