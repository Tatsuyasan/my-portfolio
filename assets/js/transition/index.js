import gsap from 'gsap'
import { noAnimation } from '@/assets/js/utils'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase)
const customEase = CustomEase.create('custom', '.75,.01,.25,.99')

export function homeEnter(el, done, from) {
  if (from !== 'work') {
    let directionTransition
    let animElementFrom
    switch (from) {
      case 'bio':
        directionTransition = '100%'
        animElementFrom = false
        break
      case 'contact':
        directionTransition = '-100%'
        animElementFrom = true
        break
    }

    gsap.fromTo(
      el,
      { left: directionTransition },
      {
        left: '0%',
        duration: 1.5,
        ease: customEase,
      }
    )
    animElementTransition(el, true, animElementFrom, done)
  } else {
    noAnimation(el, done)
  }
}

export function homeLeave(el, done, to) {
  if (to !== 'work') {
    let animElementFrom
    switch (to) {
      case 'bio':
        animElementFrom = false
        break
      case 'contact':
        animElementFrom = true
        break
    }
    animElementTransition(el, false, animElementFrom, done)
  } else {
    noAnimation(el, done)
  }
}

/**
 *
 * @param {HTMLElement} container
 * @param {boolean} inOutTransition - TRUE for in transition, FALSE for out transition
 * @param {boolean} from - FALSE for bio or TRUE for contact page
 */
function animElementTransition(container, inOutTransition, from, done) {
  const title = container?.querySelector('.home-title')

  if (inOutTransition) {
    gsap.fromTo(
      title,
      { translateX: from ? '-25px' : '25px', opacity: 0 },
      {
        translateX: '0',
        opacity: 1,
        duration: 1,
        delay: 0.8,
        onComplete: function () {
          done()
        },
      }
    )
  } else {
    gsap.fromTo(
      title,
      { translateX: '0' },
      {
        translateX: from ? '-70.72135785007072vw' : '70.72135785007072vw',
        duration: 1.5,
        ease: customEase,
        onComplete: function () {
          done()
        },
      }
    )
  }
}
