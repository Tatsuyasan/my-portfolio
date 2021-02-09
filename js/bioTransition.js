import Highway from '@dogstudio/highway';
import { gsap, TimelineLite } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

class BioTransition extends Highway.Transition {
    in({from, to, done}) {
        const tl = new TimelineLite();
        tl.fromTo(to,
            {left: '-100%'},
            {left: '0%',
                duration: 1.5,
                ease: CustomEase.create("custom", ".75,.01,.25,.99"),
                onComplete: function() {
                    from.remove();
                    done();
        }})
    }
    out({from, done}) {
        done()
    }
}

export default BioTransition;
