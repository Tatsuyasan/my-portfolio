import gsap from 'gsap'

// worst code ( doing no animation for work transition ).
export const noAnimation = (el, done) => {
  gsap.fromTo(
    el,
    { translateX: '0' },
    {
      translateX: '0',
      duration: 1,
      delay: 0.7,
      onComplete() {
        done()
      },
    }
  )
}
