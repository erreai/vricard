// Import our custom CSS
import '../scss/styles.scss'
// Default theme
import '@splidejs/splide/css';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
import Splide from '@splidejs/splide';
new Splide( '.splide', {direction: 'ttb', height   : '710px', arrows: false, autoplay: 'pause'} ).mount();

// Liquify jumbotron home
if (document.getElementById('jumbotron')) {
    let $jumbotrolSlides, $jumboImg, $jumboContent;
    $jumbotrolSlides = document.querySelectorAll('li.jumbotron');
    $jumbotrolSlides.forEach(element => {
        $jumboImg = element.querySelector('img');
        $jumboContent = element.querySelector('.splide_container');
        const { attributes } = $jumboImg;
        element.style.backgroundImage = 'url(' + attributes.src.nodeValue + ')';
        $jumboContent.style.height = $jumboContent.parentElement.clientHeight + 'px';
    });
}
