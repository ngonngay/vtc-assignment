import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './css/MenuDesktop.module.css';
const MenuDesktop = (props) => {
	const { active, linkToPage } = props;
	return (
		<div className={styles.menuDesktop}>
			<ul className={styles.mainMenu}>
				<li className={styles.activeMenu}>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

MenuDesktop.propTypes = {
	linkToPage: PropTypes.shape({
		style: PropTypes.string,
		dataLabel: PropTypes.string,
		href: PropTypes.string.isRequired,
	}),
	active: PropTypes.bool,
};

export default MenuDesktop;
