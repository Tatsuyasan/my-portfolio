import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase)
const customEase = CustomEase.create('custom', '.75,.01,.25,.99')

export const workEnter = (el, done) => {
  const title = el.querySelector('.container-title')
  const description = el.querySelector('.container-description')
  const preview = el.querySelector('.preview')

  title.style.height = '0'
  description.style.width = '0'
  preview.style.height = '0'

  const tl = gsap.timeline()

  childrenElementAnimation(el, true)

  tl.to(title, {
    height: '100%',
    duration: 0.7,
    delay: 0.4,
    ease: customEase,
  })
  tl.to(
    description,
    {
      width: '100%',
      duration: 0.7,
      ease: customEase,
    },
    '<'
  )
  tl.to(
    preview,
    {
      height: '100%',
      duration: 0.7,
      ease: customEase,
      onComplete: () => {
        done()
      },
    },
    '<'
  )
}

export const workLeave = (el, done) => {
  const title = el.querySelector('.container-title')
  const description = el.querySelector('.container-description')
  const preview = el.querySelector('.preview')

  title.style.height = '100%'
  description.style.width = '100%'
  preview.style.height = '100%'

  const tl = gsap.timeline()

  childrenElementAnimation(el, false)

  tl.to(title, {
    height: '0%',
    duration: 0.7,
    delay: 0.4,
    ease: customEase,
  })
  tl.to(
    description,
    {
      width: '0%',
      duration: 0.7,
      ease: customEase,
    },
    '<'
  )
  tl.to(
    preview,
    {
      height: '0%',
      duration: 0.7,
      ease: customEase,
      onComplete: () => {
        done()
      },
    },
    '<'
  )
}
/**
 *
 * @param {HTMLElement} container
 * @param {boolean} inOutTransition - TRUE for in transition, FALSE for out transition
 * @param {boolean} from - FALSE for bio or TRUE for contact page
 */
function childrenElementAnimation(container, inOutTransition) {
  const title = container.querySelector(
    '.container-title .slick-current .title'
  )
  const description = container.querySelector(
    '.container-description .slick-current .description'
  )
  const preview = container.querySelector('.preview-image')
  const buttons = container.querySelector('.buttons-projects')

  const tl = gsap.timeline()
  console.log(title)

  // a bit lazy
  if (inOutTransition) {
    tl.fromTo(
      title,
      { opacity: 0, x: '50%' },
      {
        opacity: 1,
        x: '0%',
        duration: 0.4,
        delay: 1.2,
      },
      '<'
    )
    tl.fromTo(
      description,
      { opacity: 0, y: '50%' },
      {
        opacity: 1,
        y: '0%',
        duration: 0.5,
      },
      '<'
    )
    tl.fromTo(
      preview,
      { opacity: 0, x: '50%' },
      {
        opacity: 1,
        x: '0%',
        duration: 0.5,
      },
      '<'
    )
    tl.fromTo(
      buttons,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.3,
      },
      '<'
    )
  } else {
    tl.fromTo(
      title,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      },
      '<'
    )
    tl.fromTo(
      description,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.5,
      },
      '<'
    )
    tl.fromTo(
      preview,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.5,
      },
      '<'
    )
    tl.fromTo(
      buttons,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1.3,
      },
      '<'
    )
  }

  // tl.fromTo(
  //   description,
  //   { opacity: 0, y: '50%' },
  //   {
  //     opacity: 1,
  //     y: '0%',
  //     duration: 0.7,
  //     delay: 0.7,
  //   }, '<'
  // )
  // tl.fromTo(description, {}, {}, '<')
  // tl.fromTo(preview, {}, {}, '<')

  // tl.to(title, {
  //   height: '0%',
  //   duration: 0.7,
  //   delay: 0.4,
  //   ease: customEase,
  // })
  // tl.to(
  //   description,
  //   {
  //     width: '0%',
  //     duration: 0.7,
  //     ease: customEase,
  //   },
  //   '<'
  // )
  // tl.to(
  //   preview,
  //   {
  //     height: '0%',
  //     duration: 0.7,
  //     ease: customEase,
  //     onComplete: () => {
  //       done()
  //     },
  //   },
  //   '<'
  // )
}
