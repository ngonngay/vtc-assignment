import { all, call, put } from 'redux-saga/effects';
import { fetchSuccess, fetchFailure } from './actions';
import axios from 'axios';
function* fetchCountries() {
	try {
		const res = yield call(axios, 'https://restcountries.com/v2/all');
		// console.log('fetch countries');
		// console.log(res.data);
		yield put(fetchSuccess(res.data));
	} catch (err) {
		yield put(fetchFailure(err));
	}
}

function* rootSaga() {
	yield all([call(fetchCountries)]);
}
export default rootSaga;
