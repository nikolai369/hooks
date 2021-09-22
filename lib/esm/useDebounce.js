import { useRef, useEffect } from 'react';
function useDebounce(cb, delay, dependencies) {
    var firstRender = useRef(true);
    useEffect(function () {
        if (firstRender.current) {
            firstRender.current = false;
            return function () { };
        }
        var timeoutId = setTimeout(cb, delay);
        return function () {
            clearTimeout(timeoutId);
        };
    }, dependencies);
}
export default useDebounce;
