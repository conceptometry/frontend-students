const postResource = (
	url,
	options,
	setData,
	setLoading,
	token,
	user,
	setUser
) => {
	fetch(url, options)
		.then((response) => response.json())
		.then((data) => {
			if (data.success === true) {
				setData(data.message);
				console.log(data);
				if (token && token !== 'null') {
					token(data.token);
				}
				if (user && user !== 'null') {
					user(data.user);
				}
				if (setUser && setUser !== 'null') {
					setUser({
						type: 'SET_USER',
						user: data.user,
						token: data.token,
					});
				}
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
