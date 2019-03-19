import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import "./ComponentStyles/_styles.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faCircle, faQuoteLeft, faCopyright, faBars, faQuoteRight, faArrowDown, faArrowUp, faUtensils, faMugHot, faBeer, faMapMarker, faHome, faWindowClose, faBath, faBed, faArrowAltCircleLeft, faArrowAltCircleRight, faLightbulb, faWrench, faPencilAlt, faHeart, faWalking, faSubway, faBus, faBicycle } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faSearch, faCircle, faQuoteLeft, faCopyright, faBars, faQuoteRight, faArrowDown, faArrowUp, faUtensils, faMugHot, faBeer, faMapMarker, faHome, faWindowClose, faBath, faBed, faArrowAltCircleLeft, faArrowAltCircleRight, faLightbulb, faWrench, faPencilAlt, faHeart, faWalking, faSubway, faBus, faBicycle );


ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));

