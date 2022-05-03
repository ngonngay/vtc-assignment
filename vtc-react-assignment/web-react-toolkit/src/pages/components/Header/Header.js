export function Header() {
	return (
		<>
			<header>
				<div className='container-menu-desktop'>
					<div className='top-bar'>
						<div className='content-topbar flex-sb-m h-full container'>
							<div className='left-top-bar'>
								Free shipping for standard order over $100
							</div>
							<div
								className='right-top-bar flex-w h-full'
								id='right-top-bar'>
								<a
									className='flex-c-m trans-04 p-lr-25'
									href='#'>
									Help &amp; FAQs
								</a>
								<a
									className='flex-c-m trans-04 p-lr-25 js-show-login--form'
									id='my-account'
									href='javascript:void(0)'>
									My Account
								</a>
								<a
									className='flex-c-m trans-04 p-lr-25'
									href='#'>
									{' '}
									EN{' '}
								</a>
								<a
									className='flex-c-m trans-04 p-lr-25'
									href='#'>
									USD
								</a>
							</div>
						</div>
					</div>
					<div className='wrap-menu-desktop'>
						<nav className='limiter-menu-desktop container'>
							<a className='logo' href='/'>
								<img
									src='/images/icons/logo-01.png'
									alt='IMG-LOGO'
								/>
							</a>
							<div className='menu-desktop'>
								<ul className='main-menu'>
									<li>
										<a href='/'>Home</a>
									</li>
									<li
										className='label1'
										data-label1='hot'>
										<a href='/products'>
											Products
										</a>
									</li>
									<li>
										<a href='/blog'>Blog</a>
									</li>
									<li>
										<a href='/about'>About</a>
									</li>
									<li>
										<a href='/contact'>Contact</a>
									</li>
								</ul>
							</div>
							<div className='wrap-icon-header flex-w flex-r-m'>
								<div className='icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search'>
									<i className='zmdi zmdi-search'></i>
								</div>
								<div
									className='icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart'
									id='js-show-cart'
									data-notify='!'>
									<i className='zmdi zmdi-shopping-cart'></i>
								</div>
								<a
									className='dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti'
									href='#'
									data-notify='0'>
									<i className='zmdi zmdi-favorite-outline'></i>
								</a>
							</div>
						</nav>
					</div>
				</div>
				<div className='wrap-header-mobile'>
					<div className='logo-mobile'>
						<a href='index.html'>
							<img src='/images/icons/logo-01.png' alt='IMG-LOGO' />
						</a>
					</div>
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
							className='dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti'
							href='#'
							data-notify='0'>
							<i className='zmdi zmdi-favorite-outline'></i>
						</a>
					</div>
					<div className='btn-show-menu-mobile hamburger hamburger--squeeze'>
						<span className='hamburger-box'>
							<span className='hamburger-inner'></span>
						</span>
					</div>
				</div>
				<div className='menu-mobile'>
					<ul className='topbar-mobile'>
						<li>
							<div className='left-top-bar'>
								Free shipping for standard order over $100
							</div>
						</li>
						<li>
							<div className='right-top-bar flex-w h-full'>
								<a
									className='flex-c-m p-lr-10 trans-04'
									href='#'>
									Help &amp; FAQs
								</a>
								<a
									className='flex-c-m p-lr-10 trans-04'
									href='#'>
									My Account
								</a>
								<a
									className='flex-c-m p-lr-10 trans-04'
									href='#'>
									{' '}
									EN{' '}
								</a>
								<a
									className='flex-c-m p-lr-10 trans-04'
									href='#'>
									USD
								</a>
							</div>
						</li>
					</ul>
					<ul className='main-menu-m'>
						<li>
							<a href='index.html'>Home</a>
							<ul className='sub-menu-m'>
								<li>
									<a href='index.html'>Homepage 1</a>
								</li>
								<li>
									<a href='home-02.html'>Homepage 2</a>
								</li>
								<li>
									<a href='home-03.html'>Homepage 3</a>
								</li>
							</ul>
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
								className='label1 rs1'
								href='shoping-cart.html'
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
				<div className='modal-search-header flex-c-m trans-04 js-hide-modal-search'>
					<div className='container-search-header'>
						<button className='flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search'>
							<img
								src='/images/icons/icon-close2.png'
								alt='CLOSE'
							/>
						</button>
						<form
							className='wrap-search-header flex-w p-l-15'
							action='/products'
							method='get'>
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
		</>
	);
}
