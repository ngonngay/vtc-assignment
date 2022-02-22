import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Paper, Typography } from '@mui/material';
import { increment, decrement } from '../../../actions';
import styles from './Counter.module.css';
import Button from '@mui/material/Button';

const Counter = () => {
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();
	return (
		<div className={styles.root}>
			<Paper mt={4} elevation={3}>
				<Box className={styles.box}>
					<Button
						variant='outlined'
						className={styles.value}
						onClick={() => {
							dispatch(decrement());
						}}>
						Decrement
					</Button>
					<Typography variant='h5' component='h1' className={styles.mt5}>
						{count}
					</Typography>
					<Button
						variant='outlined'
						className={styles.value}
						onClick={() => {
							dispatch(increment());
						}}>
						Increment
					</Button>
				</Box>
			</Paper>
		</div>
	);
};

export default Counter;
