import charming from 'charming'
import Highway from '@dogstudio/highway';
import {TweenLite} from "gsap";

export default class BioRender extends Highway.Renderer {
    onEnter() {
        hireMeButton();
    }

    onLeave() {
    }

    onEnterCompleted() {
    }

    onLeaveCompleted() {
    }
}

function hireMeButton() {
    const btn = document.querySelector('.btn-new-project');
    const animateText = document.querySelector(".animate-text");
    charming(animateText);

    btn.addEventListener('mouseover', (event) => {
        event.preventDefault();
        TweenLite.to(animateText, .5, {opacity: '1'});
    });
    btn.addEventListener('mouseleave', (event) => {
        event.preventDefault();
        TweenLite.to(animateText, .5, {opacity: '0'});
    });
}
