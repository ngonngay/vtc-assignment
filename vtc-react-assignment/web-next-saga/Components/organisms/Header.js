import React from 'react';
import LogoDesktop from '../molecules/LogoDesktop';
import MenuDesktop from '../molecules/MenuDesktop';
import styles from './css/Header.module.css';
const Header = () => {
	return (
		<header>
			{/* <!-- Header desktop --> */}
			<div classNameName={styles.containerMenuDesktop}>
				<div className={styles.wrapMenuDesktop}>
					<nav className={styles.limiterMenuDesktop}>
						<LogoDesktop src='images/icons/logo-01.png' alt='IMG-LOGO' />
						<MenuDesktop />
						{/* <!-- Icon header --> */}
						<div className='wrap-icon-header flex-w flex-r-m'>
							<div className='icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search'>
								<i className='zmdi zmdi-search'></i>
							</div>

							<div
								className='icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart'
								data-notify='2'>
								<i className='zmdi zmdi-shopping-cart'></i>
							</div>

							<a
								href='#'
								className='dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti'
								data-notify='0'>
								<i className='zmdi zmdi-favorite-outline'></i>
							</a>
						</div>
					</nav>
				</div>
			</div>

			{/* <!-- Header Mobile --> */}
			<div className='wrap-header-mobile'>
				{/* <!-- Logo moblie --> */}
				<div className='logo-mobile'>
					<a href='index.html'>
						<img src='images/icons/logo-01.png' alt='IMG-LOGO' />
					</a>
				</div>

				{/* <!-- Icon header --> */}
				<div className='wrap-icon-header flex-w flex-r-m m-r-15'>
					<div className='icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search'>
						<i className='zmdi zmdi-search'></i>
					</div>

					<div
						className='icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart'
						data-notify='2'>
						<i className='zmdi zmdi-shopping-cart'></i>
					</div>

					<a
						href='#'
						className='dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti'
						data-notify='0'>
						<i className='zmdi zmdi-favorite-outline'></i>
					</a>
				</div>

				{/* <!-- Button show menu --> */}
				<div className='btn-show-menu-mobile hamburger hamburger--squeeze'>
					<span className='hamburger-box'>
						<span className='hamburger-inner'></span>
					</span>
				</div>
			</div>

			{/* <!-- Menu Mobile --> */}
			<div className='menu-mobile'>
				<ul className='main-menu-m'>
					<li>
						<a href='index.html'>Home</a>

						<span className='arrow-main-menu-m'>
							<i
								className='fa fa-angle-right'
								aria-hidden='true'></i>
						</span>
					</li>

					<li>
						<a href='product.html'>Shop</a>
					</li>

					<li>
						<a
							href='shoping-cart.html'
							className='label1 rs1'
							data-label1='hot'>
							Features
						</a>
					</li>

					<li>
						<a href='blog.html'>Blog</a>
					</li>

					<li>
						<a href='about.html'>About</a>
					</li>

					<li>
						<a href='contact.html'>Contact</a>
					</li>
				</ul>
			</div>

			{/* <!-- Modal Search --> */}
			<div className='modal-search-header flex-c-m trans-04 js-hide-modal-search'>
				<div className='container-search-header'>
					<button className='flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search'>
						<img src='images/icons/icon-close2.png' alt='CLOSE' />
					</button>

					<form className='wrap-search-header flex-w p-l-15'>
						<button className='flex-c-m trans-04'>
							<i className='zmdi zmdi-search'></i>
						</button>
						<input
							className='plh3'
							type='text'
							name='search'
							placeholder='Search...'
						/>
					</form>
				</div>
			</div>
		</header>
	);
};

export default Header;
