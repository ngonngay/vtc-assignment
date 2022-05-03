export function Slider() {
	const settings = {
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 1000,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 6000,
		arrows: true,

		prevArrow: '<button class="arrow-slick1 prev-slick1"><i class="zmdi zmdi-caret-left"></i></button>',
		nextArrow: '<button class="arrow-slick1 next-slick1"><i class="zmdi zmdi-caret-right"></i></button>',
		dots: true,
		appendDots: $(wrapSlick1).find('.wrap-slick1-dots'),
		dotsClass: 'slick1-dots',
	};
	return (
		<>
			{/* <!-- Slider--> */}
			<section className='section-slide'>
				<div className='wrap-slick1'>
					<div className='slick1'>
						<div
							className='item-slick1'
							style={{
								backgroundImage: 'url(images/slide-01.jpg)',
							}}>
							<div className='container h-full'>
								<div className='flex-col-l-m h-full p-t-100 p-b-30 respon5'>
									<div
										className='layer-slick1 animated visible-false'
										data-appear='fadeInDown'
										data-delay='0'>
										<span className='ltext-101 cl2 respon2'>
											{' '}
											Women Collection 2018{' '}
										</span>
									</div>
									<div
										className='layer-slick1 animated visible-false'
										data-appear='fadeInUp'
										data-delay='800'>
										<h2 className='ltext-201 cl2 p-t-19 p-b-43 respon1'>
											NEW SEASON
										</h2>
									</div>
									<div
										className='layer-slick1 animated visible-false'
										data-appear='zoomIn'
										data-delay='1600'>
										<a
											className='flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04'
											href='product.html'>
											{' '}
											Shop Now{' '}
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							className='item-slick1'
							style={{
								backgroundImage: 'url(images/slide-02.jpg)',
							}}>
							<div className='container h-full'>
								<div className='flex-col-l-m h-full p-t-100 p-b-30 respon5'>
									<div
										className='layer-slick1 animated visible-false'
										data-appear='rollIn'
										data-delay='0'>
										<span className='ltext-101 cl2 respon2'>
											{' '}
											Men New-Season{' '}
										</span>
									</div>
									<div
										className='layer-slick1 animated visible-false'
										data-appear='lightSpeedIn'
										data-delay='800'>
										<h2 className='ltext-201 cl2 p-t-19 p-b-43 respon1'>
											Jackets &amp; Coats
										</h2>
									</div>
									<div
										className='layer-slick1 animated visible-false'
										data-appear='slideInUp'
										data-delay='1600'>
										<a
											className='flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04'
											href='product.html'>
											{' '}
											Shop Now{' '}
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							className='item-slick1'
							style={{
								backgroundImage: 'url(images/slide-03.jpg)',
							}}>
							<div className='container h-full'>
								<div className='flex-col-l-m h-full p-t-100 p-b-30 respon5'>
									<div
										className='layer-slick1 animated visible-false'
										data-appear='rotateInDownLeft'
										data-delay='0'>
										<span className='ltext-101 cl2 respon2'>
											{' '}
											Men Collection 2018{' '}
										</span>
									</div>
									<div
										className='layer-slick1 animated visible-false'
										data-appear='rotateInUpRight'
										data-delay='800'>
										<h2 className='ltext-201 cl2 p-t-19 p-b-43 respon1'>
											New arrivals
										</h2>
									</div>
									<div
										className='layer-slick1 animated visible-false'
										data-appear='rotateIn'
										data-delay='1600'>
										<a
											className='flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04'
											href='product.html'>
											{' '}
											Shop Now{' '}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Banner--> */}
			<div className='sec-banner bg0 p-t-95 p-b-55'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 p-b-30 m-lr-auto'>
							{/* <!-- Block1--> */}
							<div className='block1 wrap-pic-w'>
								<img
									src='images/banner-04.jpg'
									alt='IMG-BANNER'
								/>
								<a
									className='block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3'
									href='product.html'>
									<div className='block1-txt-child1 flex-col-l'>
										<span className='block1-name ltext-102 trans-04 p-b-8'>
											Women
										</span>
										<span className='block1-info stext-102 trans-04'>
											New Trend
										</span>
									</div>
									<div className='block1-txt-child2 p-b-4 trans-05'>
										<div className='block1-link stext-101 cl0 trans-09'>
											Shop Now
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className='col-md-6 p-b-30 m-lr-auto'>
							{/* <!-- Block1--> */}
							<div className='block1 wrap-pic-w'>
								<img
									src='images/banner-05.jpg'
									alt='IMG-BANNER'
								/>
								<a
									className='block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3'
									href='product.html'>
									<div className='block1-txt-child1 flex-col-l'>
										<span className='block1-name ltext-102 trans-04 p-b-8'>
											Men
										</span>
										<span className='block1-info stext-102 trans-04'>
											New Trend
										</span>
									</div>
									<div className='block1-txt-child2 p-b-4 trans-05'>
										<div className='block1-link stext-101 cl0 trans-09'>
											Shop Now
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className='col-md-6 col-lg-4 p-b-30 m-lr-auto'>
							{/* <!-- Block1--> */}
							<div className='block1 wrap-pic-w'>
								<img
									src='images/banner-07.jpg'
									alt='IMG-BANNER'
								/>
								<a
									className='block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3'
									href='product.html'>
									<div className='block1-txt-child1 flex-col-l'>
										<span className='block1-name ltext-102 trans-04 p-b-8'>
											Watches
										</span>
										<span className='block1-info stext-102 trans-04'>
											Spring 2018
										</span>
									</div>
									<div className='block1-txt-child2 p-b-4 trans-05'>
										<div className='block1-link stext-101 cl0 trans-09'>
											Shop Now
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className='col-md-6 col-lg-4 p-b-30 m-lr-auto'>
							{/* <!-- Block1--> */}
							<div className='block1 wrap-pic-w'>
								<img
									src='images/banner-08.jpg'
									alt='IMG-BANNER'
								/>
								<a
									className='block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3'
									href='product.html'>
									<div className='block1-txt-child1 flex-col-l'>
										<span className='block1-name ltext-102 trans-04 p-b-8'>
											Bags
										</span>
										<span className='block1-info stext-102 trans-04'>
											Spring 2018
										</span>
									</div>
									<div className='block1-txt-child2 p-b-4 trans-05'>
										<div className='block1-link stext-101 cl0 trans-09'>
											Shop Now
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className='col-md-6 col-lg-4 p-b-30 m-lr-auto'>
							{/* <!-- Block1--> */}
							<div className='block1 wrap-pic-w'>
								<img
									src='images/banner-09.jpg'
									alt='IMG-BANNER'
								/>
								<a
									className='block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3'
									href='product.html'>
									<div className='block1-txt-child1 flex-col-l'>
										<span className='block1-name ltext-102 trans-04 p-b-8'>
											Accessories
										</span>
										<span className='block1-info stext-102 trans-04'>
											Spring 2018
										</span>
									</div>
									<div className='block1-txt-child2 p-b-4 trans-05'>
										<div className='block1-link stext-101 cl0 trans-09'>
											Shop Now
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
