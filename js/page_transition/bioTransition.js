import Highway from '@dogstudio/highway';
import {gsap} from 'gsap';
import {CustomEase} from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
const customEase = CustomEase.create("custom", ".75,.01,.25,.99");

class BioTransition extends Highway.Transition {
    in({from, to, done}) {
        gsap.fromTo(to,
            {left: '-100%'},
            {
                left: '0%',
                duration: 1.5,
                ease: customEase,
                onComplete: function () {
                    from.remove();
                    done();
                }
            });
        animElementTransition(to, true)
    }

    out({from, done}) {
        animElementTransition(from, false)

        done();
    }
}

/**
 *
 * @param {HTMLElement} container
 * @param {boolean} inOutTransition - TRUE for in transition, FALSE for out transition
 */
function animElementTransition(container, inOutTransition ) {
    const title = container?.querySelector('.bio-title');
    const description = container?.querySelector('.bio-description');
    const image = container?.querySelector('.bio-image');
    const btnProject = container?.querySelector('.btn-project');

    if (inOutTransition){
        gsap.fromTo(image, {translateX: '-25px', opacity: 0}, {translateX: '0', opacity: 1, duration: 1, delay: .7 });
        gsap.fromTo(title, {translateX: '-25px', opacity: 0}, {translateX: '0', opacity: 1, duration: 1, delay: .8});
        gsap.fromTo(description, {translateX: '-25px', opacity: 0}, {translateX: '0', opacity: 1, duration: 1, delay: .9 });
        gsap.fromTo(btnProject, {translateX: '-25px', opacity: 0}, {translateX: '0', opacity: 1, duration: 1, delay: .9 });
    } else {
        gsap.fromTo(title, {translateX: '0'}, {translateX: '-70.72135785007072vw', duration: 1.5,  ease: customEase});
        gsap.fromTo(description, {translateX: '0'}, {translateX: '-70.72135785007072vw', duration: 1.5, ease: customEase });
        gsap.fromTo(image, {translateX: '0'}, {translateX: '-70.72135785007072vw', duration: 1.5, ease: customEase });
        gsap.fromTo(btnProject, {translateX: '0'}, {translateX: '-70.72135785007072vw', duration: 1.5, ease: customEase });
    }
}

export default BioTransition;
