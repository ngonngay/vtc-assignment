import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/login/loginSlice';
import { reducer, reducerPath, middleware } from './apis';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
		[reducerPath]: reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
