import { Grow } from '@material-ui/core';
import { useEffect, useState } from 'react';
import LectureList from '../shared/Lists/Lecture';
import {
	LecturesContainer,
	LecturesListContainer,
	LecturesPageTitle,
} from './styles/Lectures';

const Lectures = () => {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		setTimeout(function () {
			setVisible(true);
		}, 0);
	}, []);
	return (
		<Grow in={visible} timeout={700}>
			<LecturesContainer>
				<LecturesPageTitle>Lectures</LecturesPageTitle>
				<LecturesListContainer>
					<LectureList />
					<LectureList />
					<LectureList />
					<LectureList />
				</LecturesListContainer>
			</LecturesContainer>
		</Grow>
	);
};

export default Lectures;
