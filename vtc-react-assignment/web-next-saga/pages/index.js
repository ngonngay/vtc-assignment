import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import { Container, TextField } from '@mui/material';
import DisplayCountry from './Components/Country/DisplayCountry';
export default function Home() {
	const countriesStore = useSelector((state) => state.countries);
	const [countries, setCountries] = useState();
	const [filter, setFilter] = useState('');
	//console.log(countries);

	useEffect(() => {
		if (countriesStore) {
			setCountries(countriesStore);
		}
	}, [countriesStore]);
	useEffect(() => {
		if (filter) {
			setCountries(
				countries.filter((country) => {
					if (country.name.toLowerCase().includes(filter.toLowerCase())) {
						return country;
					}
				}),
			);
		} else {
			setCountries(countriesStore);
		}
	}, [filter]);

	return (
		<>
			<div className={styles.title}>Nextjs Demo</div>
			<Container className={styles.grid}>
				<div className={styles.card}>
					<div className={styles.count}>Found {countriesStore.length}</div>
					<TextField
						id='filled-basic'
						label='Filter'
						variant='filled'
						value={filter}
						className={styles.filter}
						onChange={(e) => {
							setFilter(e.target.value);
						}}
					/>
				</div>
			</Container>
			<div className={styles.dataTable}>
				{' '}
				{countries && <DisplayCountry countries={countries} />}
			</div>
		</>
	);
}
