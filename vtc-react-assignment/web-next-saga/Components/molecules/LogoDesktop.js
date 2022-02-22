import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './css/LogoDesktop';

const LogoDesktop = (props) => {
	const { src, alt, width, height } = props;
	return (
		<Link href='/'>
			<a className={styles.logo}>
				<Image src={src} alt={alt} width={width} height={height} />
			</a>
		</Link>
	);
};

export default LogoDesktop;
