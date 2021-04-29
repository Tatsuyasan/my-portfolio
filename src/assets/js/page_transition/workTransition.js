import Highway from '@dogstudio/highway';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
const customEase = CustomEase.create('custom', '.75,.01,.25,.99');

class WorkTransition extends Highway.Transition {
  in({ from, to, done }) {
    const title = to.querySelector('.title');
    const description = to.querySelector('.description');
    const preview = to.querySelector('.preview');

    title.style.height = '0';
    description.style.width = '0';
    preview.style.height = '0';

    const tl = gsap.timeline();

    tl.to('.title', {
      height: '100%',
      duration: 0.7,
      delay: 0.4,
      ease: customEase,
    });
    tl.to(
      '.description',
      {
        width: '100%',
        duration: 0.7,
        ease: customEase,
      },
      '<'
    );
    tl.to(
      '.preview',
      {
        height: '100%',
        duration: 0.7,
        ease: customEase,
        onComplete: () => {
          done();
        },
      },
      '<'
    );
  }

  out({ from, trigger, done }) {
    const tl = gsap.timeline();
    tl.to('.title', {
      height: '0%',
      duration: 0.7,
      delay: 0.4,
      ease: customEase,
    });
    tl.to(
      '.description',
      {
        width: '0%',
        duration: 0.7,
        ease: customEase,
      },
      '<'
    );
    tl.to(
      '.preview',
      {
        height: '0%',
        duration: 0.7,
        ease: customEase,
        onComplete: () => {
          from.remove();
          done();
        },
      },
      '<'
    );
  }
}

export default WorkTransition;
