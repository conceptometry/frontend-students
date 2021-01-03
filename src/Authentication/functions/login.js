export const login = (
	formData,
	dispatch,
	history,
	setMessage,
	token,
	redirect
) => {
	fetch(`${process.env.REACT_APP_API_URI}/auth/login`, {
		method: 'POST', // or 'PUT'
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			if (data.success === false) {
				setMessage(data.message);
			} else {
				if (data.user.role !== 'student') {
					setMessage({
						message: 'Only students are allowed to access this dashboard',
					});
				} else {
					setMessage(data.message);
					if (
						data.success === true &&
						data.user.role === 'student' &&
						token === null
					) {
						dispatch({
							type: 'SET_USER',
							user: data.user,
							token: data.token,
						});
						if (redirect) {
							history.push(`${redirect}`);
						} else {
							history.push('/');
						}
					}
				}
			}
		})
		.catch((error) => {
			setMessage(error);
		});
};
