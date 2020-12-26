import LectureList from '../shared/Lists/Lecture';
import {
	LecturesContainer,
	LecturesListContainer,
	LecturesPageTitle,
} from './styles/Lectures';

const Lectures = () => {
	return (
		<LecturesContainer>
			<LecturesPageTitle>Lectures</LecturesPageTitle>
			<LecturesListContainer>
				<LectureList />
				<LectureList />
				<LectureList />
				<LectureList />
			</LecturesListContainer>
		</LecturesContainer>
	);
};

export default Lectures;
