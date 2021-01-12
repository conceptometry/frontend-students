const user = localStorage.getItem('user');
const parsedUser = JSON.parse(user);
const token = localStorage.getItem('token');
const parsedToken = JSON.parse(token);

export const initialState = {
	user: parsedUser || null,
	token: parsedToken || null,
	navOpen: false,
	error: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
				token: action.token,
			};

		case 'SET_NAV_OPEN':
			return {
				...state,
				navOpen: action.navOpen,
			};

		case 'SET_ERROR':
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
};

export default reducer;
