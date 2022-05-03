import './../App.css';
import './../index.css';
import './components/vendor/bootstrap/css/bootstrap.min.css';
import './components/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './components/fonts/iconic/css/material-design-iconic-font.min.css';
import './components/fonts/linearicons-v1.0.0/icon-font.min.css';
import './components/vendor/animate/animate.css';
import './components/vendor/css-hamburgers/hamburgers.min.css';
import './components/vendor/animsition/css/animsition.min.css';
import './components/vendor/MagnificPopup/magnific-popup.css';
import './components/vendor/perfect-scrollbar/perfect-scrollbar.css';
import './components/vendor/select2/select2.min.css';
import './components/vendor/daterangepicker/daterangepicker.css';
import './components/vendor/slick/slick.css';
import './components/vendor/bootstrap/css/bootstrap.min.css';

import { Header } from './components/Header/Header';
import { Slider } from './components/Slider/Slider';
import { Products } from './components/Product/Products';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer';

export function HomePage(options) {
	return (
		<>
			<Header />
			<Slider />
			{/* <Products />
			<Cart />
			<Footer /> */}
		</>
	);
}
