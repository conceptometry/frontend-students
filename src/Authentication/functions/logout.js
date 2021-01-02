export const logout = (dispatch) => {
	dispatch({
		type: 'SET_USER',
		user: null,
		token: null,
	});
};
