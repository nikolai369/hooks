import { useRef, useEffect } from 'react';

function useDebounce(cb: Function, delay: number, dependencies?: any[]) {
    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return () => {};
        }
        const timeoutId = setTimeout(cb, delay);
        return () => {
            clearTimeout(timeoutId);
        };
    }, dependencies);
}

export default useDebounce;
