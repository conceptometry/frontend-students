const postResource = (url, options, setData, setLoading) => {
	fetch(url, options)
		.then((response) => response.json())
		.then((data) => {
			if (data.success === true) {
				setData(data.message);
				console.log(data);
			} else {
				setData(data.message);
			}
			if (setLoading) {
				setLoading(false);
			}
		})
		.catch((error) => {
			setData('There was a problem while processing the data, 500');

			console.log(error);
			if (setLoading) {
				setLoading(false);
			}
		});
};

export default postResource;
