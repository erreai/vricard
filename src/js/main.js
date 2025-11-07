// Import our custom CSS
import '../scss/styles.scss'
// Default theme
import '@splidejs/splide/css';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
import Splide from '@splidejs/splide';
new Splide( '.splide__ttb', {direction: 'ttb', height   : '710px', arrows: false, autoplay: 'pause'} ).mount();
new Splide( '.splide__mobile', {
    type: 'loop',
    autoplay: 'pause',
    arrows: false,
    gap: '15px',
    padding: { left: '1rem', right: '1rem' },
    perPage: 1,
    perMove: 1,
    height: '220px',
    snap: false,
    drag: true,
    mediaQuery: 'min',
    breakpoints: {
      768: {
        height: '370px',
      },
      1300: {
        destroy: true
      }
    }
} ).mount();
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
// Animated counter
const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
        window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

let $arrayNumberIncrement = document.getElementsByClassName('number--animated');
  if ($arrayNumberIncrement) {
    for (let i = 0; i < $arrayNumberIncrement.length; i++) {
      const element = $arrayNumberIncrement[i];
      let value = element.dataset.value;
      animateValue(element, 0, value, 1000);
    }
  }
