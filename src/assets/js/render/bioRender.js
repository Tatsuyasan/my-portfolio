import charming from 'charming'
import {TweenLite} from "gsap";
import defaultRender from "./defaultRender";

export default class BioRender extends defaultRender {
    onEnter() {
        super.onEnter();
        hireMeButton();
    }

    onLeave() {
        super.onLeave();
    }

    onEnterCompleted() {
        super.onEnterCompleted();
    }

    onLeaveCompleted() {
        super.onLeaveCompleted();
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
