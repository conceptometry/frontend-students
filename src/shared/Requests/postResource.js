const postResource = (url, options, setData, setLoading, dispatch) => {
	fetch(url, options)
		.then((response) => response.json())
		.then((data) => {
			setData(data.message);
			console.log(data.message);
			if (dispatch) {
				dispatch({
					type: 'SET_ERROR',
					error: [],
				});
			}
			if (setLoading) {
				setLoading(false);
			}
		})
		.catch((error) => {
			// setData(JSON.stringify(error));
			if (dispatch) {
				dispatch({
					type: 'SET_ERROR',
					error: 'There was an error while processing the data, 500',
				});
			}
			console.log(error);
			if (setLoading) {
				setLoading(false);
			}
		});
};

export default postResource;
