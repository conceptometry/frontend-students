import {
	LoadingContainer,
	LoadingIcon,
	LoadingScreenContainer,
	LoadingScreenIcon,
} from './styles/Loading';

const LoadingScreen = () => {
	return (
		<LoadingScreenContainer gradientBg>
			<LoadingScreenIcon />
		</LoadingScreenContainer>
	);
};

const LoadingCircular = () => {
	return (
		<LoadingContainer>
			<LoadingIcon />
		</LoadingContainer>
	);
};

export { LoadingScreen, LoadingCircular };
