let token = null;

const setToken = (newToken) => {
	token = `bearer ${newToken}`;
};
(function ($) {
	'use strict';

	/*[ Load page ]
	  ===========================================================*/
	$('.animsition').animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: 1500,
		outDuration: 800,
		linkElement: '.animsition-link',
		loading: true,
		loadingParentElement: 'html',
		loadingClass: 'animsition-loading-1',
		loadingInner: '<div class="loader05"></div>',
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: ['animation-duration', '-webkit-animation-duration'],
		overlay: false,
		overlayClass: 'animsition-overlay-slide',
		overlayParentElement: 'html',
		transition: function (url) {
			window.location.href = url;
		},
	});

	/*[ Back to top ]
	  ===========================================================*/
	var windowH = $(window).height() / 2;

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > windowH) {
			$('#myBtn').css('display', 'flex');
		} else {
			$('#myBtn').css('display', 'none');
		}
	});

	$('#myBtn').on('click', function () {
		$('html, body').animate({ scrollTop: 0 }, 300);
	});

	/*==================================================================
	  [ Fixed Header ]*/
	var headerDesktop = $('.container-menu-desktop');
	var wrapMenu = $('.wrap-menu-desktop');

	if ($('.top-bar').length > 0) {
		var posWrapHeader = $('.top-bar').height();
	} else {
		var posWrapHeader = 0;
	}

	if ($(window).scrollTop() > posWrapHeader) {
		$(headerDesktop).addClass('fix-menu-desktop');
		$(wrapMenu).css('top', 0);
	} else {
		$(headerDesktop).removeClass('fix-menu-desktop');
		$(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
	}

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > posWrapHeader) {
			$(headerDesktop).addClass('fix-menu-desktop');
			$(wrapMenu).css('top', 0);
		} else {
			$(headerDesktop).removeClass('fix-menu-desktop');
			$(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
		}
	});

	/*==================================================================
	  [ Menu mobile ]*/
	$('.btn-show-menu-mobile').on('click', function () {
		$(this).toggleClass('is-active');
		$('.menu-mobile').slideToggle();
	});

	var arrowMainMenu = $('.arrow-main-menu-m');

	for (var i = 0; i < arrowMainMenu.length; i++) {
		$(arrowMainMenu[i]).on('click', function () {
			$(this).parent().find('.sub-menu-m').slideToggle();
			$(this).toggleClass('turn-arrow-main-menu-m');
		});
	}

	$(window).resize(function () {
		if ($(window).width() >= 992) {
			if ($('.menu-mobile').css('display') == 'block') {
				$('.menu-mobile').css('display', 'none');
				$('.btn-show-menu-mobile').toggleClass('is-active');
			}

			$('.sub-menu-m').each(function () {
				if ($(this).css('display') == 'block') {
					console.log('hello');
					$(this).css('display', 'none');
					$(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
				}
			});
		}
	});

	/*==================================================================
	  [ Show / hide modal search ]*/
	$('.js-show-modal-search').on('click', function () {
		$('.modal-search-header').addClass('show-modal-search');
		$(this).css('opacity', '0');
	});

	$('.js-hide-modal-search').on('click', function () {
		$('.modal-search-header').removeClass('show-modal-search');
		$('.js-show-modal-search').css('opacity', '1');
	});

	$('.container-search-header').on('click', function (e) {
		e.stopPropagation();
	});

	/*==================================================================
	  [ Isotope ]*/
	var $topeContainer = $('.isotope-grid');
	var $filter = $('.filter-tope-group');

	// filter items on button click
	$filter.each(function () {
		$filter.on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$topeContainer.isotope({ filter: filterValue });
		});
	});

	// init Isotope
	$(window).on('load', function () {
		var $grid = $topeContainer.each(function () {
			$(this).isotope({
				itemSelector: '.isotope-item',
				layoutMode: 'fitRows',
				percentPosition: true,
				animationEngine: 'best-available',
				masonry: {
					columnWidth: '.isotope-item',
				},
			});
		});
	});

	var isotopeButton = $('.filter-tope-group button');

	$(isotopeButton).each(function () {
		$(this).on('click', function () {
			for (var i = 0; i < isotopeButton.length; i++) {
				$(isotopeButton[i]).removeClass('how-active1');
			}

			$(this).addClass('how-active1');
		});
	});

	/*==================================================================
	  [ Filter / Search product ]*/
	$('.js-show-filter').on('click', function () {
		$(this).toggleClass('show-filter');
		$('.panel-filter').slideToggle(400);

		if ($('.js-show-search').hasClass('show-search')) {
			$('.js-show-search').removeClass('show-search');
			$('.panel-search').slideUp(400);
		}
	});

	$('.js-show-search').on('click', function () {
		$(this).toggleClass('show-search');
		$('.panel-search').slideToggle(400);

		if ($('.js-show-filter').hasClass('show-filter')) {
			$('.js-show-filter').removeClass('show-filter');
			$('.panel-filter').slideUp(400);
		}
	});
	let addRemoveProductInCartEvent = () => {
		$('.how-itemcart1').on('click', function (e) {
			let product = $(`#${e.target.getAttribute('data-target')}`)[0];
			//console.log(producttarget);
			let cart = JSON.parse(window.localStorage.getItem('cart'));
			//console.log(cart);
			cart.product = cart.product.filter(
				(n) => n.name !== product.getAttribute('data-name'),
			);
			//console.log(cart);
			cart.quantity = cart.quantity - Number(product.getAttribute('data-quantity'));
			cart.total =
				cart.total -
				Number(product.getAttribute('data-price')) *
					Number(product.getAttribute('data-quantity'));
			//console.log(cart);
			if (cart.product.length > 0) {
				window.localStorage.setItem('cart', JSON.stringify(cart));
				console.log(cart.product.length);
			} else {
				window.localStorage.removeItem('cart');
				$('#subtotal1').text('');
				$('#subtotal2').text('');
			}
			renderCartContent();
			renderHeaderCartContent();
		});

		$('.header-cart-item-img').on('click', function (e) {
			//console.log('click', e);
			let product = e.target;
			let cart = JSON.parse(window.localStorage.getItem('cart'));
			cart.product = cart.product.filter(
				(n) => n.name !== product.getAttribute('data-name'),
			);

			//console.log(product);
			cart.quantity = cart.quantity - Number(product.getAttribute('data-quantity'));
			cart.total =
				cart.total -
				Number(product.getAttribute('data-price')) *
					Number(product.getAttribute('data-quantity'));
			//console.log(cart);
			if (cart.product.length > 0) {
				window.localStorage.setItem('cart', JSON.stringify(cart));
				console.log(cart.product.length);
			} else {
				window.localStorage.removeItem('cart');
				$('#subtotal1').text('');
				$('#subtotal2').text('');
			}
			renderCartContent();
			renderHeaderCartContent();
		});
	};
	/*==================================================================
	  [ Cart ]*/
	let renderHeaderCartContent = () => {
		let cart = window.localStorage.getItem('cart');
		let html = '';
		$('#header-checkout-button').hide();
		$('#header-viewcart-button').hide();
		if (cart) {
			cart = JSON.parse(cart);
			cart.product.forEach((product) => {
				html += `
							<li class="header-cart-item flex-w flex-t m-b-12">
								<div class="header-cart-item-img"  data-price='${product.price}'data-quantity='${product.quantity}'data-id='${product.id}'data-name='${product.name}' data-thumbnail='${product.thumbnail}' >
									<img src="${product.thumbnail}" alt="IMG" />
								</div>

								<div class="header-cart-item-txt p-t-8">
									<a href="javascript:void(0)" class="header-cart-item-name m-b-18 hov-cl1 trans-04"> ${product.name} </a>

									<span class="header-cart-item-info"> ${product.quantity} x ${product.price} VND</span>
								</div>
							</li>
						`;
			});
			$('#header-cart-total').text('Total: ' + cart.total + ' VND');
			$('#header-checkout-button').show();
			$('#header-viewcart-button').show();
			$('#js-show-cart').attr('data-notify', cart.quantity);
		} else {
			html += 'Bạn chưa có sản phẩm nào trong giỏ hàng';
			$('#header-cart-total').text('');
		}

		$('#header-cart-content').html(html);
		//console.log(JSON.parse(cart));
		addRemoveProductInCartEvent();
	};
	$('.js-show-cart').on('click', () => {
		$('.js-panel-cart').addClass('show-header-cart');
		renderHeaderCartContent();
	});

	$('.js-hide-cart').on('click', function () {
		$('.js-panel-cart').removeClass('show-header-cart');
	});
	/*=============[Cart page]=====================*/
	let renderCartContent = () => {
		//console.log($('#table-items'));
		let html = `Bạn chưa có sản phẩm nào trong giỏ hàng!`;
		let cart = window.localStorage.getItem('cart');
		$(' #cart-footer').hide();
		if (cart) {
			html = `
				<tr class="table_head">
					<th class="column-1">Product</th>
					<th class="column-2"></th>
					<th class="column-3">Price</th>
					<th class="column-4">Quantity</th>
					<th class="column-5">Total</th>
				</tr>
			`;
			cart = JSON.parse(cart);
			cart.product.forEach((product) => {
				html += `
					<tr class="table_row">
						<td class="column-1">
							<div class="how-itemcart1" data-target='${product.name.replace(/\s+/g, '')}'>
								<img src="${product.thumbnail}" alt="IMG" />
							</div>
						</td>
						<td class="column-2">${product.name}</td>
						<td class="column-3">${product.price} VND</td>
						<td class="column-4">
							<div class="wrap-num-product flex-w m-l-auto m-r-0">
								<div data-price='${product.price}' data-target='${product.name.replace(
					/\s+/g,
					'',
				)}' class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
									<i class="fs-16 zmdi zmdi-minus"></i>
								</div>
		
								<input id='${product.name.replace(/\s+/g, '')}' data-price='${product.price}'data-id='${
					product.id
				}'data-name='${product.name}' data-thumbnail='${
					product.thumbnail
				}' class="mtext-104 cl3 txt-center num-product" type="number" name="${
					product.id
				}" value="${product.quantity}" />
		
								<div data-price='${product.price}' data-target='${product.name.replace(
					/\s+/g,
					'',
				)}'class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
									<i class="fs-16 zmdi zmdi-plus"></i>
								</div>
							</div>
						</td>
						<td class="column-5" id='label${product.name.replace(/\s+/g, '')}'>${product.quantity * product.price}</td>
					</tr>
				`;
			});
			$('#subtotal1').text(cart.total);
			$('#subtotal2').text(cart.total);
			$(' #cart-footer').show();
		}

		$('#table-items').html(html);
		addRemoveProductInCartEvent();
	};
	$('#update-total-btn').on('click', function () {
		let numpdtInputs = $('.num-product').get();
		let newCart = {
			product: [],
			quantity: 0,
			total: 0,
		};
		numpdtInputs.forEach((product) => {
			let newProduct = {
				id: product.getAttribute('data-id'),
				name: product.getAttribute('data-name'),
				thumbnail: product.getAttribute('data-thumbnail'),
				quantity: Number(product.value),
				price: Number(product.getAttribute('data-price')),
			};
			//console.log(newProduct);
			//console.log(product);
			// console.log(product.getAttribute('data-price'));
			newCart.product.push(newProduct);
			newCart.quantity = newCart.quantity + newProduct.quantity;
			newCart.total = newCart.total + newProduct.price * newProduct.quantity;
		});
		$('#js-show-cart').attr('data-notify', newCart.quantity);
		window.localStorage.setItem('cart', JSON.stringify(newCart));

		$('#subtotal1').text(newCart.total);
		$('#subtotal2').text(newCart.total);
	});
	renderCartContent();
	/*==================================================================
	  [ Cart ]*/
	$('.js-show-sidebar').on('click', function () {
		$('.js-sidebar').addClass('show-sidebar');
	});

	$('.js-hide-sidebar').on('click', function () {
		$('.js-sidebar').removeClass('show-sidebar');
	});

	/*==================================================================
	  [ +/- num product ]*/
	$('.btn-num-product-down').on('click', function () {
		var numProduct = Number($(this).next().val());
		if (numProduct >= 2) {
			$(this)
				.next()
				.val(numProduct - 1);
			let price = $(this).attr('data-price');
			let target = $(this).attr('data-target');
			//console.log($('#' + target));
			$('#label' + target).text(Number(price) * (numProduct - 1));
		}
	});

	$('.btn-num-product-up').on('click', function () {
		var numProduct = Number($(this).prev().val());
		$(this)
			.prev()
			.val(numProduct + 1);
		let price = $(this).attr('data-price');
		let target = $(this).attr('data-target');
		//console.log($('#' + target));
		$('#label' + target).text(Number(price) * (numProduct + 1));
	});

	/*==================================================================
	  [ Rating ]*/
	$('.wrap-rating').each(function () {
		var item = $(this).find('.item-rating');
		var rated = -1;
		var input = $(this).find('input');
		$(input).val(0);

		$(item).on('mouseenter', function () {
			var index = item.index(this);
			var i = 0;
			for (i = 0; i <= index; i++) {
				$(item[i]).removeClass('zmdi-star-outline');
				$(item[i]).addClass('zmdi-star');
			}

			for (var j = i; j < item.length; j++) {
				$(item[j]).addClass('zmdi-star-outline');
				$(item[j]).removeClass('zmdi-star');
			}
		});

		$(item).on('click', function () {
			var index = item.index(this);
			rated = index;
			$(input).val(index + 1);
		});

		$(this).on('mouseleave', function () {
			var i = 0;
			for (i = 0; i <= rated; i++) {
				$(item[i]).removeClass('zmdi-star-outline');
				$(item[i]).addClass('zmdi-star');
			}

			for (var j = i; j < item.length; j++) {
				$(item[j]).addClass('zmdi-star-outline');
				$(item[j]).removeClass('zmdi-star');
			}
		});
	});
	/**handle add to card from detail page */
	$('#detail-add-to-cart').on('click', () => {
		//console.log('click');
		let nameProduct = $('#detail-js-name-detail').text();
		let size = $('#detail-size-select').val();
		let color = $('#detail-color-select').val();
		//console.log(size === '', color === '');
		if (size === '') {
			swal('Pick a size', 'Select size before add to cart !', 'error');
		} else if (color === '') {
			swal('Pick a color', 'Select color before add to cart !', 'error');
		} else {
			swal(nameProduct, 'is added to cart !', 'success');
			let cart = window.localStorage.getItem('cart');
			//console.log('size', size);
			//console.log('color', color);
			//console.log('test ' + (size || '') + ' ' + (color || ''));
			let newProduct = {
				id: $('#detail-js-name-detail').attr('data-id'),
				name: nameProduct + (size || '') + ' ' + (color || ''),
				thumbnail: $('#detail-thumbnail').attr('src'),
				quantity: Number($('#detail-quantity').val()),
				price: Number($('#detail-js-price-detail').text()),
			};
			//console.log(newProduct.name);
			if (cart) {
				cart = JSON.parse(cart);
				let check = false;
				cart.product.forEach((product) => {
					//console.log();
					if (
						product.id === newProduct.id &&
						product.name === newProduct.name
					) {
						product.quantity += newProduct.quantity;
						check = true;
					}
				});
				if (!check) {
					cart.product.push(newProduct);
				}
				cart.quantity = cart.quantity + newProduct.quantity;
				cart.total = cart.total + newProduct.price * newProduct.quantity;
				$('#js-show-cart').attr('data-notify', cart.quantity);
			} else {
				cart = {
					product: [newProduct],
					quantity: Number(newProduct.quantity),
					total: Number(newProduct.price) * Number(newProduct.quantity),
				};
			}
			window.localStorage.setItem('cart', JSON.stringify(cart));
		}
	});

	/*==================================================================
	  [ Show modal1 ]*/
	const fillModal1 = function (product) {
		let name = $('#js-name-detail')[0];
		let price = $('#js-price-detail')[0];
		let desc = $('#js-desc-detail')[0];
		name.innerHTML = product.name;
		$('#js-name-detail').attr('data-id', product.id);
		$('#js-price-detail').attr('data-price', product.price);
		let image = $('#modal-slick3')[0];
		price.innerHTML = `${product.price} VND`;
		desc.innerHTML = product.desc[0].val;
		let productAttrs = product.attrs.filter((attr) => {
			return attr.name === 'size' || attr.name === 'color';
		});
		let productImage = product.assets.imgs;
		//console.log(productImage);

		let slickItem = ``;
		productImage.forEach((image) => {
			slickItem += `
			<div class="item-slick3" data-thumb=${image.img.src}>
				<div class="wrap-pic-w pos-relative">
					<img id="thumbnail" src=${image.img.src} alt="IMG-PRODUCT" />
					<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href=${image.img.src}>
						<i class="fa fa-expand"></i>
					</a>
				</div>
			</div>`;
		});
		let imageHtml = `
			<div class="wrap-slick3 flex-sb flex-w">
				<div class="wrap-slick3-dots"></div>
				<div class="wrap-slick3-arrows flex-sb-m flex-w"></div>
				<div class="slick3 gallery-lb">${slickItem}</div>
			</div>`;
		$('#modal-slick3').html(imageHtml);
		$('#color-select-wrapper').html('');
		$('#size-select-wrapper').html('');
		productAttrs?.forEach((attr) => {
			switch (attr.name) {
				case 'color':
					let colorOption = ``;
					attr.value.split(',').forEach((value) => {
						colorOption += `<option value="${value}">${value}</option>`;
					});
					var colorHtml = '';
					colorHtml += `<div class="flex-w flex-r-m p-b-10">
						  <div class="size-203 flex-c-m respon6">Color</div>
						  <div class="size-204 respon6-next">
							  <div class="rs1-select2 bor8 bg0">
								  <select class="js-select2" name="color" id="color-select-tag">
								  <option value="">Choose an option</option>
								  ${colorOption}
								  </select>
								  <div class="dropDownSelect2">
								  </div>
							  </div>
						  </div>
					  </div>`;
					$('#color-select-wrapper').html(colorHtml);
					break;
				case 'size':
					let sizeOption = ``;
					attr.value.split(',').forEach((value) => {
						sizeOption += `<option value="${value}">${value}</option>`;
					});
					var sizeHtml = '';
					sizeHtml += `<div class="flex-w flex-r-m p-b-10">
							<div class="size-203 flex-c-m respon6">Size</div>
							<div class="size-204 respon6-next">
								<div class="rs1-select2 bor8 bg0">
									<select class="js-select2" name="size" id="size-select-tag">
									<option value=''>Choose an option</option>
									${sizeOption}
									</select>
									<div class="dropDownSelect2">
									</div>
								</div>
							</div>
						</div>`;
					$('#size-select-wrapper').html(sizeHtml);
					break;
				default:
					break;
			}
		});
		$('.js-select2').each(function () {
			$(this).select2({
				minimumResultsForSearch: 20,
				dropdownParent: $(this).next('.dropDownSelect2'),
			});
		});
	};
	const handleAddToCart = async function () {
		let nameProduct = $('#js-name-detail').text();
		let size = $('#size-select-tag').val();
		let color = $('#color-select-tag').val();
		if (size === '') {
			swal('Pick a size', 'Select size before add to cart !', 'error');
		} else if (color === '') {
			swal('Pick a color', 'Select color before add to cart !', 'error');
		} else {
			swal(nameProduct, ' is added to cart !', 'success');
			let cart = window.localStorage.getItem('cart');
			//console.log('size', size);
			//console.log('color', color);
			//console.log('test ' + (size || '') + ' ' + (color || ''));
			let newProduct = {
				id: $('#js-name-detail').attr('data-id'),
				name: nameProduct + (size || '') + ' ' + (color || ''),
				thumbnail: $('#thumbnail').attr('src'),
				quantity: Number($('#modal-quantity').val()),
				price: Number($('#js-price-detail').attr('data-price')),
			};
			//console.log(newProduct);
			if (cart) {
				cart = JSON.parse(cart);
				let check = false;
				cart.product.forEach((product) => {
					//console.log();
					if (
						product.id === newProduct.id &&
						product.name === newProduct.name
					) {
						product.quantity += newProduct.quantity;
						check = true;
					}
				});
				if (!check) {
					cart.product.push(newProduct);
				}
				cart.quantity = cart.quantity + newProduct.quantity;
				cart.total = cart.total + newProduct.price * newProduct.quantity;
				$('#js-show-cart').attr('data-notify', cart.quantity);
			} else {
				cart = {
					product: [newProduct],
					quantity: Number(newProduct.quantity),
					total: Number(newProduct.price) * Number(newProduct.quantity),
				};
			}
			window.localStorage.setItem('cart', JSON.stringify(cart));
		}
	};
	$('.js-show-modal1').on('click', function (e) {
		e.preventDefault();
		//let dataApi = this.attr('data-api');
		let api = e.target.getAttribute('data-api');
		fetch(api)
			.then((response) => response.json())
			.then(({ product }) => {
				//console.log(product);
				fillModal1(product);
				$('.js-modal1').addClass('show-modal1');

				$('#add-to-cart').on('click', handleAddToCart);
			})
			.then((result) => {
				try {
					$('.slick3').slick('unslick');
				} catch (error) {
					console.log(error);
				}

				$('.wrap-slick3').each(function () {
					$(this)
						.find('.slick3')
						.slick({
							slidesToShow: 1,
							slidesToScroll: 1,
							fade: true,
							infinite: true,
							autoplay: false,
							autoplaySpeed: 6000,
							arrows: true,
							appendArrows: $(this).find('.wrap-slick3-arrows'),
							prevArrow: '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
							nextArrow: '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
							dots: true,
							appendDots: $(this).find('.wrap-slick3-dots'),
							dotsClass: 'slick3-dots',
							customPaging: function (slick, index) {
								var portrait = $(slick.$slides[index]).data(
									'thumb',
								);
								return (
									'<img src=" ' +
									portrait +
									' "/><div class="slick3-dot-overlay"></div>'
								);
							},
						});
				});
				$('.gallery-lb').each(function () {
					$(this).magnificPopup({
						delegate: 'a', // the selector for gallery item
						type: 'image',
						gallery: {
							enabled: true,
						},
						mainClass: 'mfp-fade',
					});
				});
			});
	});

	$('.js-hide-modal1').on('click', function () {
		$('.js-modal1').removeClass('show-modal1');
		$('#add-to-cart').off('click');
	});

	/*==================================================================
    [ handle logout]*/
	var handleLogout = function handleLogout() {
		console.log('logged out');
		window.localStorage.removeItem('loggedUser');
		$('#right-top-bar').html(`
			<div class="right-top-bar flex-w h-full" id="right-top-bar">
				<a class="flex-c-m trans-04 p-lr-25" href="#">Help &amp; FAQs</a>
				<a class="flex-c-m trans-04 p-lr-25 js-show-login--form" id="my-account" href="javascript:void(0)">My Account</a>
				<a class="flex-c-m trans-04 p-lr-25" href="#"> EN </a><a class="flex-c-m trans-04 p-lr-25" href="#">USD</a>
			</div>
		`);
		addEventToLoginModal();
		addEventToRegisterModal();
	};
	/*==================================================================
    [ Excute login or not ]*/
	$(document).ready(function () {
		let loggedUser = window.localStorage.getItem('loggedUser');
		//console.log(loggedUser);
		if (loggedUser) {
			//logged
			$('#right-top-bar').html(`
			<a href="#" class="flex-c-m trans-04 p-lr-25"> Help & FAQs </a>
			<div class="cus-menu">
				<a href="#" class="flex-c-m trans-04 p-lr-25"> ${JSON.parse(loggedUser).username} </a>
				<ul class="cus-submenu">
					<li class="cus-submenu--item flex-c-m trans-04 p-lr-25"><a href="#" class=""> My Account </a></li>
					<li class="cus-submenu--item flex-c-m trans-04 p-lr-25"><a href="/api/users/cart" class=""> Cart </a></li>
					<li class="cus-submenu--item flex-c-m trans-04 p-lr-25"><a href="#" class=""> Notifications </a></li>
					<div class="dropdown-divider"></div>
					<li class="cus-submenu--item flex-c-m trans-04 p-lr-25"><a href="javascript:void(0)" class="js-logout" "> Logout </a></li>
				</ul>
			</div>

			<a href="#" class="flex-c-m trans-04 p-lr-25"> EN </a>

			<a href="#" class="flex-c-m trans-04 p-lr-25"> USD </a>
			`);
			$('#my-account').off('click').removeClass('js-show-login--form');
			$('.js-logout').on('click', function (e) {
				handleLogout();
			});
		}
	});

	/*==================================================================
    [ Show login modal ]*/
	function addEventToLoginModal() {
		$('.js-show-login--form').on('click', (e) => {
			e.preventDefault();

			$('#registerModal').modal('hide');
			$('#loginModal').modal('show');
			$(function () {
				$('[data-toggle="tooltip"]').tooltip();
				$('input').val('');
			});
		});
	}
	function addEventToRegisterModal() {
		$('.js-show-register--form').on('click', (e) => {
			e.preventDefault();

			$('#loginModal').modal('hide');
			$('#registerModal').modal('show');
			$(function () {
				$('[data-toggle="tooltip"]').tooltip();
				$('input').val('');
			});
		});
	}
	addEventToLoginModal();
	addEventToRegisterModal();

	// hanlde login
	$('#loginForm').on('submit', async (e) => {
		e.preventDefault();
		let data = Object.fromEntries(new FormData(e.target).entries());
		try {
			await fetch('http://localhost:3001/api/account/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...data,
				}),
			})
				.then((response) => {
					//console.log(response);
					return response.json();
				})
				.then((user) => {
					if (!user.error) {
						window.localStorage.setItem(
							'loggedUser',
							JSON.stringify(user),
						);
						swal('Good job!', 'You logged in!', 'success');

						$('#loginModal').modal('hide');
						$('#right-top-bar').html(`
							<a href="#" class="flex-c-m trans-04 p-lr-25"> Help & FAQs </a>
							<div class="cus-menu">
								<a href="#" class="flex-c-m trans-04 p-lr-25"> ${user.username} </a>
								<ul class="cus-submenu">
									<li class="cus-submenu--item flex-c-m trans-04 p-lr-25"><a href="#" class=""> My Account </a></li>
									<li class="cus-submenu--item flex-c-m trans-04 p-lr-25"><a href="#" class=""> Cart </a></li>
									<li class="cus-submenu--item flex-c-m trans-04 p-lr-25"><a href="#" class=""> Notifications </a></li>
									<div class="dropdown-divider"></div>
									<li class="cus-submenu--item flex-c-m trans-04 p-lr-25"><a href="javascript:void(0)" class="js-logout" "> Logout </a></li>
								</ul>
							</div>

							<a href="#" class="flex-c-m trans-04 p-lr-25"> EN </a>

							<a href="#" class="flex-c-m trans-04 p-lr-25"> USD </a>
							`);

						$('#my-account')
							.off('click')
							.removeClass('js-show-login--form');
						$('.js-logout').on('click', function (e) {
							handleLogout();
						});
					} else {
						swal('Error!', 'Wrong username or password', 'error');
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (error) {
			console.log(error);
		}
	});
	$('#registerForm').on('submit', async (e) => {
		e.preventDefault();
		let data = Object.fromEntries(new FormData(e.target).entries());
		try {
			await fetch('http://localhost:3001/api/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...data,
				}),
			})
				.then((response) => {
					console.log(response);
					return response.json();
				})
				.then((user) => {
					if (!user.error) {
						window.localStorage.setItem(
							'loggedUser',
							JSON.stringify(user),
						);
						swal('Good job!', 'You logged in!', 'success');

						$('#registerModal').modal('hide');
						$('#right-top-bar').html(`
							<a href="#" class="flex-c-m trans-04 p-lr-25"> Help & FAQs </a>
							<div class="cus-menu">
								<a href="#" class="flex-c-m trans-04 p-lr-25"> ${user.username} </a>
								<ul class="cus-submenu">
									<li class="cus-submenu--item flex-c-m trans-04 p-lr-25"><a href="#" class=""> My Account </a></li>
									<li class="cus-submenu--item flex-c-m trans-04 p-lr-25"><a href="#" class=""> Cart </a></li>
									<li class="cus-submenu--item flex-c-m trans-04 p-lr-25"><a href="#" class=""> Notifications </a></li>
									<div class="dropdown-divider"></div>
									<li class="cus-submenu--item flex-c-m trans-04 p-lr-25"><a href="javascript:void(0)" class="js-logout" "> Logout </a></li>
								</ul>
							</div>

							<a href="#" class="flex-c-m trans-04 p-lr-25"> EN </a>

							<a href="#" class="flex-c-m trans-04 p-lr-25"> USD </a>
							`);

						$('#my-account')
							.off('click')
							.removeClass('js-show-login--form');
						$('.js-logout').on('click', function (e) {
							handleLogout();
						});
					} else {
						swal('Error!', 'Wrong username or password', 'error');
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (error) {
			console.log(error);
		}
	});
})(jQuery);
