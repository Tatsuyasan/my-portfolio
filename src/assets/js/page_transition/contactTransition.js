import Highway from '@dogstudio/highway';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
const customEase = CustomEase.create('custom', '.75,.01,.25,.99');

class ContactTransition extends Highway.Transition {
  in({ from, to, done }) {
    const viewName = from.getAttribute('data-router-view');

    if (viewName === 'work') {
      from.remove();
      done();
      return;
    }
    gsap.fromTo(
      to,
      { left: '100%' },
      {
        left: '0%',
        duration: 1.5,
        ease: customEase,
        onComplete: function () {
          from.remove();
          done();
        },
      }
    );
    animElementTransition(to, true);
  }

  out({ from, trigger, done }) {
    const viewName = from.getAttribute('data-router-view');
    if (viewName !== 'WORK') {
      animElementTransition(from, false);
      done();
    }
    done();
  }
}

/**
 *
 * @param {HTMLElement} container
 * @param {boolean} inOutTransition - TRUE for in transition, FALSE for out transition
 */
function animElementTransition(container, inOutTransition) {
  const title = container?.querySelector('.contact-title');
  const description = container?.querySelector('.contact-description');
  const linkContainer = container?.querySelector('.contact-link');

  if (inOutTransition) {
    gsap.fromTo(
      title,
      { translateX: '25px', opacity: 0 },
      { translateX: '0', opacity: 1, duration: 1, delay: 0.7 }
    );
    gsap.fromTo(
      description,
      { translateX: '25px', opacity: 0 },
      { translateX: '0', opacity: 1, duration: 1, delay: 0.8 }
    );
    gsap.fromTo(
      linkContainer,
      { translateX: '25px', opacity: 0 },
      { translateX: '0', opacity: 1, duration: 1, delay: 0.8 }
    );
  } else {
    gsap.fromTo(
      title,
      { translateX: '0' },
      { translateX: '70.72135785007072vw', duration: 1.5, ease: customEase }
    );
    gsap.fromTo(
      description,
      { translateX: '0' },
      { translateX: '70.72135785007072vw', duration: 1.5, ease: customEase }
    );
    gsap.fromTo(
      linkContainer,
      { translateX: '0' },
      { translateX: '70.72135785007072vw', duration: 1.5, ease: customEase }
    );
  }
}

export default ContactTransition;
