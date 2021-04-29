import gsap from 'gsap'
import { noAnimation } from '@/assets/js/utils'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase)
const customEase = CustomEase.create('custom', '.75,.01,.25,.99')

export function bioEnter(el, done, from) {
  if (from !== 'work') {
    gsap.fromTo(
      el,
      { left: '-100%' },
      {
        left: '0%',
        duration: 1.5,
        ease: customEase,
      }
    )
    animElementTransition(el, true, done)
  } else {
    noAnimation(el, done)
  }
}

export function bioLeave(el, done, to) {
  if (to !== 'work') {
    gsap.fromTo(
      el,
      { left: '0%' },
      {
        left: '-100%',
        duration: 1.5,
        ease: customEase,
      }
    )
    gsap.fromTo(
      el,
      { left: '0%' },
      {
        left: '0%',
        duration: 1.5,
        ease: customEase,
      }
    )
    animElementTransition(el, false, done)
  } else {
    noAnimation(el, done)
  }
}

/**
 *
 * @param {HTMLElement} container
 * @param {boolean} inOutTransition - TRUE for in transition, FALSE for out transition
 */
function animElementTransition(container, inOutTransition, done) {
  const title = container?.querySelector('.bio-title')
  const description = container?.querySelector('.bio-description')
  const image = container?.querySelector('.bio-image')
  const btnProject = container?.querySelector('.btn-project')

  if (inOutTransition) {
    gsap.fromTo(
      image,
      { translateX: '-25px', opacity: 0 },
      { translateX: '0', opacity: 1, duration: 1, delay: 0.7 }
    )
    gsap.fromTo(
      title,
      { translateX: '-25px', opacity: 0 },
      { translateX: '0', opacity: 1, duration: 1, delay: 0.8 }
    )
    gsap.fromTo(
      description,
      { translateX: '-25px', opacity: 0 },
      { translateX: '0', opacity: 1, duration: 1, delay: 0.9 }
    )
    gsap.fromTo(
      btnProject,
      { translateX: '-25px', opacity: 0 },
      {
        translateX: '0',
        opacity: 1,
        duration: 1,
        delay: 0.9,
        onComplete() {
          done()
        },
      }
    )
  } else {
    gsap.fromTo(
      title,
      { translateX: '0' },
      { translateX: '-70.72135785007072vw', duration: 1.5, ease: customEase }
    )
    gsap.fromTo(
      description,
      { translateX: '0' },
      { translateX: '-70.72135785007072vw', duration: 1.5, ease: customEase }
    )
    gsap.fromTo(
      image,
      { translateX: '0' },
      { translateX: '-70.72135785007072vw', duration: 1.5, ease: customEase }
    )
    gsap.fromTo(
      btnProject,
      { translateX: '0' },
      {
        translateX: '-70.72135785007072vw',
        duration: 1.5,
        ease: customEase,
        onComplete() {
          done()
        },
      }
    )
  }
}
