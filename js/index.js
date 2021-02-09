import Highway from '@dogstudio/highway';
import BioTransition from './bioTransition'
import HomeTransition from './homeTransition'
import ContactTransition from './contactTransition'
import {TimelineLite} from "gsap";

const H = new Highway.Core({
    transitions: {
        home: HomeTransition,
        bio: BioTransition,
        contact: ContactTransition
    }
})

// Get all menu links
const links = document.querySelectorAll('.nav-link');
const tl = new TimelineLite();
const nav = document.getElementsByClassName("nav-container")
let wasAnimated = false;

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
                // if we are in homePage, let's go to animate navbar.
                tl.fromTo(nav, {top: '0%'}, {
                    top: '25%', onComplete: function () {
                        wasAnimated = true
                    }
                })
            } else {
                // else if navbar has been animated, it come back to initial position.
                if (wasAnimated === true)
                    tl.fromTo(nav, {top: '25%'}, {
                        top: '0%', onComplete: function () {
                            wasAnimated = false
                        }
                    })
            }
        }
    }
});
