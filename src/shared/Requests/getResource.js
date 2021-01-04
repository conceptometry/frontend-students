const getResource = (
	url,
	headers,
	setResource,
	setLoading,
	setError,
	setData
) => {
	fetch(url, {
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
			if (setData && data !== undefined && data) {
				setData(data);
			}
			if (setLoading) {
				setTimeout(() => {
					setLoading(false);
				}, 300);
			}
		})
		.catch((error) => {
			setResource([]);
			if (setError) {
				setError('Something went wrong, 500');
			}
			console.log(error);
			if (setLoading) {
				setTimeout(() => {
					setLoading(false);
				}, 100);
			}
		});
};

export default getResource;
