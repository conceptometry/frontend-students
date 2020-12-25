import React from 'react';
import {
	LectureListContainer,
	LectureTitle,
	LectureInfo,
	LectureContainer,
	LectureContainerInfo,
	SmallInfo,
	ViewLectureIcon,
	ViewLectureLink,
} from './styles/LectureList';

const LectureList = () => {
	return (
		<LectureListContainer>
			<LectureTitle>This is a lecture</LectureTitle>
			<LectureInfo>
				<LectureContainer>
					<small>Date</small>
					<LectureContainerInfo>21/12/2020</LectureContainerInfo>
				</LectureContainer>
				<LectureContainer>
					<small>Duration</small>
					<LectureContainerInfo>
						60 <SmallInfo>min</SmallInfo>
					</LectureContainerInfo>
				</LectureContainer>
				<ViewLectureLink to='/'>
					<ViewLectureIcon />
				</ViewLectureLink>
			</LectureInfo>
		</LectureListContainer>
	);
};

export default LectureList;
