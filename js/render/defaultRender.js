import Highway from '@dogstudio/highway';

export default class DefaultRender extends Highway.Renderer {
    onEnter() {
    }

    onLeave() {
    }

    onEnterCompleted() {
        document.body.classList.remove("in-transition");
    }

    onLeaveCompleted() {
        document.body.classList.add("in-transition");
    }
}
