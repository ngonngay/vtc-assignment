import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import reducer from './reducer';
import rootSaga from './saga';
export const makeStore = (context) => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(reducer, applyMiddleware(sagaMiddleware));
	store.sagaTask = sagaMiddleware.run(rootSaga);
	return store;
};

export const wrapper = createWrapper(makeStore);
