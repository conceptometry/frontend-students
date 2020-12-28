const getResource = async (
	url,
	headers,
	setResource,
	setLoading,
	setError,
	setData
) => {
	await fetch(url, {
		method: 'GET', // or 'PUT'
		headers: headers,
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.success === true) {
				setResource(data.message);
				console.log(data);
				if (setError) {
					setError('');
				}
			} else {
				setResource([]);
				if (setError) {
					setError('Something went wrong, 400');
				}
			}
			if (setData) {
				setData(data);
			}
			if (setLoading) {
				setLoading(false);
			}
		})
		.catch((error) => {
			setResource([]);
			if (setError) {
				setError('Something went wrong, 500');
			}
			console.log(error);
			if (setLoading) {
				setLoading(false);
			}
		});
};

export default getResource;
