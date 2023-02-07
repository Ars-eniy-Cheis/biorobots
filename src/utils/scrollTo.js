import { animateScroll } from "./animateScroll";

const logError = () =>
    console.error(
        `Invalid element, are you sure you've provided element id or react ref?`
    );

const getElementPosition = (element) => element.offsetTop;

const scrollTo = ({ id, ref = null, duration = 3000 }) => {
    const initialPosition = window.scrollY;

    const element = ref ? ref.current : id ? document.getElementById(id) : null;

    if (!element) {
        logError();
        return;
    }

    animateScroll({
        targetPosition: getElementPosition(element),
        initialPosition,
        duration
    });
};

export default scrollTo