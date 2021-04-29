import Highway from '@dogstudio/highway';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
const customEase = CustomEase.create('custom', '.75,.01,.25,.99');

class HomeTransition extends Highway.Transition {
  in({ from, to, trigger, done }) {
    const linkName = trigger.innerHTML;
    console.log('linkName => ', linkName)

    const viewName = from.getAttribute('data-router-view');
    let directionTransition;
    let animElementFrom;
    
    if (viewName === 'work') {
      from.remove();
      done()
      return;
    }

    switch (viewName) {
      case 'bio':
        directionTransition = '100%';
        animElementFrom = false;
        break;
      case 'contact':
        directionTransition = '-100%';
        animElementFrom = true;
        break;
    }

    gsap.fromTo(
      to,
      { left: directionTransition },
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

    // animElementTransition(to, true, animElementFrom);
  }

  out({ from, trigger, done }) {
    const linkName = trigger.innerHTML;
    if(linkName !== 'WORK') {
      let animElementFrom;

      switch (linkName) {
        case 'BIO':
          animElementFrom = false;
          break;
        case 'CONTACT':
          animElementFrom = true;
          break;
      }
  
      // animElementTransition(from, false, animElementFrom);
      done();
    }

    done();
    
  }
}

/**
 *
 * @param {HTMLElement} container
 * @param {boolean} inOutTransition - TRUE for in transition, FALSE for out transition
 * @param {boolean} from - FALSE for bio or TRUE for contact page
 */
function animElementTransition(container, inOutTransition, from) {
  const title = container?.querySelector('.home-title');

  if (inOutTransition) {
    gsap.fromTo(
      title,
      { translateX: from ? '-25px' : '25px', opacity: 0 },
      { translateX: '0', opacity: 1, duration: 1, delay: 0.8 }
    );
  } else {
    gsap.fromTo(
      title,
      { translateX: '0' },
      {
        translateX: from ? '-70.72135785007072vw' : '70.72135785007072vw',
        duration: 1.5,
        ease: customEase,
      }
    );
  }
}

export default HomeTransition;
