// Import our custom CSS
import '../scss/styles.scss'
// Default theme
import '@splidejs/splide/css';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
import * as FullCalendar from 'fullcalendar';
import esLocale from '@fullcalendar/core/locales/es';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';


import Splide from '@splidejs/splide';
new Splide( '.splide__ttb', {direction: 'ttb', height   : '710px', arrows: false, autoplay: 'pause'} ).mount();
new Splide( '.splide__mobile', {
    type: 'loop',
    autoplay: 'pause',
    arrows: false,
    gap: '15px',
    padding: { left: '1rem', right: '1rem' },
    perMove: 1,
    rewind : true,
    height: '220px',
    snap: false,
    drag: true,
    mediaQuery: 'min',
    breakpoints: {
      768: {
        height: '370px',
        perPage: 2,
      },
      1200: {
        height: '370px',
        perPage: 3,
      },
      1300: {
        destroy: true,
        perPage: 4,
      }
    }
} ).mount();
// Liquify jumbotron home
let liquifyImage = (theContainer, sizeSelf=false) => {
    let imageContainer, image;
    imageContainer = theContainer.parentElement;
    image = theContainer.querySelector('img');
    const { attributes } = image;
    image.style.visibility = "hidden";
    theContainer.style.backgroundImage = 'url(' + attributes.src.nodeValue + ')';
    if(sizeSelf){
      theContainer.style.height = image.parentElement.clientHeight + 'px';
    } else {
      theContainer.style.height = imageContainer.parentElement.clientHeight + 'px';
    }
};
if (document.getElementById('jumbotron')) {
    let $jumbotrolSlides;
    $jumbotrolSlides = document.querySelectorAll('li div.splide_container');
    $jumbotrolSlides.forEach(element => {
        liquifyImage(element);
    });
}
if (document.getElementsByClassName('liquifyImage')) {
    let $IMAGES;
    $IMAGES = document.querySelectorAll('.liquifyImage');
    $IMAGES.forEach(element => {
        liquifyImage(element, true);
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

let calendarEl = document.getElementById('calendar');
if(calendarEl){

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ bootstrap5Plugin ],
    initialView: 'dayGridMonth',
    locale: esLocale,
    themeSystem: 'bootstrap5',
    datesSet: function(info) {
      setTimeout(() => {
        let titleEl = document.querySelector('.fc-toolbar-title');
        if (titleEl) {
           titleEl.textContent = titleEl.textContent.replace(/\bde\b\s*/gi, '').trim();
        }
      }, 0);
    }

  });
  calendar.render();
}