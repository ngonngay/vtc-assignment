import { actionTypes } from './actions';

const initialState = {
	countries: [],
	status: 'idle',
	errors: null,
};
function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FetchCountries:
			return { ...state, status: 'loading' };
		case actionTypes.FetchSuccess:
			return { ...state, countries: action.payload.data, status: 'success' };
		case actionTypes.FetchFailure:
			return { ...state, errors: action.error, status: 'failure' };
		default:
			return state;
	}
}
export default reducer;
