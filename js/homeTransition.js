import Highway from '@dogstudio/highway';
import {gsap, TimelineLite} from 'gsap';
import {CustomEase} from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

class HomeTransition extends Highway.Transition {
    in({from, to, done}) {
        const viewName = from.getAttribute('data-router-view')
        let directionTransition
        const tl = new TimelineLite();

        switch (viewName) {
            case 'bio':
                directionTransition = '100%'
                break;
            case 'contact':
                directionTransition = '-100%'
                break;
        }

        tl.fromTo(to,
            {left: directionTransition},
            {
                left: '0%',
                duration: 1.5,
                ease: CustomEase.create("custom", ".75,.01,.25,.99"),
                onComplete: function () {
                    from.remove();
                    done();
                }
            })
    }

    out({from, done}) {
        done()
    }
}

export default HomeTransition;
