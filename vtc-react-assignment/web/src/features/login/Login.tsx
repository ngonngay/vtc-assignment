import React from 'react';
import { useLoginMutation } from '../../app/apis';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { logout, selectUser } from './loginSlice';

const Login = () => {
	const [login, { isLoading, data, error }] = useLoginMutation();
	const dispatch = useAppDispatch();
	const currentUser = useAppSelector(selectUser);
	if (data) {
		window.alert(data.username);
	}

	return (
		<div>
			{data && <h1>{currentUser}</h1>}
			{error && console.log(error)}
			<button
				onClick={async () => {
					try {
						await login({
							username: 'thang',
							password: 'thang',
						});
					} catch (err) {
						console.log(err);
					}
				}}>
				Login
			</button>
			<button
				onClick={() => {
					try {
						dispatch(logout());
					} catch (err) {
						console.log(err);
					}
				}}>
				logout
			</button>
		</div>
	);
};

export default Login;
