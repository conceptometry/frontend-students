import { LectureByUser, LectureIntroContainer, LectureTitle } from '../styles';

const LectureIntro = ({ title, byUser }) => {
	return (
		<>
			<LectureIntroContainer>
				<LectureTitle>{title}</LectureTitle>
				<LectureByUser>By {byUser}</LectureByUser>
			</LectureIntroContainer>
			<hr style={{ width: '99.2%', marginBottom: 3 }} />
		</>
	);
};

export default LectureIntro;
