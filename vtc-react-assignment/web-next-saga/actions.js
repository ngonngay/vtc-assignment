export const actionTypes = {
	FetchCountries: 'FETCH_COUNTRIES',
	FetchSuccess: 'FETCH_SUCCEEDED',
	FetchFailure: 'FETCH_FAILURE',
};

export function fetchCountries() {
	return { type: actionTypes.FetchCountries };
}
export function fetchSuccess(data) {
	return {
		type: actionTypes.FetchSuccess,
		payload: {
			data,
		},
	};
}
export function fetchFailure(error) {
	return { type: actionTypes.FetchFailure, error };
}
