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
