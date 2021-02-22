import Highway from '@dogstudio/highway';
import BioTransition from './page_transition/bioTransition';
import HomeTransition from './page_transition/homeTransition';
import ContactTransition from './page_transition/contactTransition';
import {TimelineLite} from "gsap";
import BioRender from "./render/bioRender";

const H = new Highway.Core({
    renderers: {
        bio: BioRender
    },
    transitions: {
        home: HomeTransition,
        bio: BioTransition,
        contact: ContactTransition
    }
});

const links = document.querySelectorAll('.nav-link');
const tl = new TimelineLite();
const nav = document.getElementsByClassName("nav-container");

// Listen the `NAVIGATE_IN` event
// This event is sent everytime a `data-router-view` is added to the DOM Tree
H.on('NAVIGATE_IN', ({to, location}) => {
    // Check Active Link
    for (let i = 0; i < links.length; i++) {
        const link = links[i];

        // Clean class
        link.classList.remove('is-active');

        // Active link
        if (link.href === location.href) {
            link.classList.add('is-active');

            const path = link.href.split('/');
            if (path[path.length - 1] === "") {
                tl.fromTo(nav, {opacity: '1'}, {opacity: '0'})
                    .fromTo(links, {color: '#E8E6DE'}, {color: 'black'})
                    .fromTo(nav, {opacity: '0'}, {opacity: '1'});
            } else {
                tl.fromTo(links, {opacity: '1'}, {opacity: '0'})
                    .fromTo(links, {color: 'black'}, {color: '#E8E6DE'})
                    .fromTo(links, {opacity: '0'}, {opacity: '1'});
            }
        }
    }
});
