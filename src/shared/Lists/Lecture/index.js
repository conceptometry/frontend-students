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

const LectureList = ({ title, eventTime, duration, id }) => {
	const date = new Date(eventTime);
	const formattedDate =
		date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
	return (
		<LectureListContainer>
			<LectureTitle>{title}</LectureTitle>
			<LectureInfo>
				<LectureContainer>
					<small>Date</small>
					<LectureContainerInfo>{formattedDate}</LectureContainerInfo>
				</LectureContainer>
				<LectureContainer>
					<small>Duration</small>
					<LectureContainerInfo>
						{duration} <SmallInfo>min</SmallInfo>
					</LectureContainerInfo>
				</LectureContainer>
				<ViewLectureLink to={`/lectures/${id}`}>
					<ViewLectureIcon />
				</ViewLectureLink>
			</LectureInfo>
		</LectureListContainer>
	);
};

export default LectureList;
