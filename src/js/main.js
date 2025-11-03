// Import our custom CSS
import '../scss/styles.scss'
// Default theme
import '@splidejs/splide/css';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
import Splide from '@splidejs/splide';
new Splide( '.splide', {direction: 'ttb', height   : '580px'} ).mount();