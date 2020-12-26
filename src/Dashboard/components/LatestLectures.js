import React from 'react';
import LectureList from '../../shared/Lists/Lecture';
import { LatestLecturesContainer, ViewAllBtn } from '../styles/LatestLectures';

const LatestLectures = () => {
	return (
		<LatestLecturesContainer>
			<LectureList />
			<LectureList />
			<LectureList />
			<LectureList />
			<ViewAllBtn to='/'>View all</ViewAllBtn>
		</LatestLecturesContainer>
	);
};

export default LatestLectures;
