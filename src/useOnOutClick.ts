import { RefObject, useEffect, useRef } from 'react';

export default function useOnOutClick<TTargetElement extends HTMLElement, TIgnoreElement extends HTMLElement>(
    onOutClick: ((e: globalThis.MouseEvent) => void) | (() => void)
) {
    const targetRef = useRef<TTargetElement>(null);
    const ignoreRef = useRef<TIgnoreElement>(null);

    useEffect(() => {
        const outClickHanlder = (e: globalThis.MouseEvent) => {
            const target = e.target as Node;
            if (
                target === targetRef.current ||
                targetRef.current?.isEqualNode(target) ||
                targetRef.current?.contains(target) ||
                target === ignoreRef?.current ||
                ignoreRef?.current?.isEqualNode(target) ||
                ignoreRef?.current?.contains(target)
            ) {
                return;
            }

            onOutClick(e);
        };

        window.addEventListener('click', outClickHanlder, true);
        return () => {
            window.removeEventListener('click', outClickHanlder, true);
        };
    }, [onOutClick, targetRef.current, ignoreRef.current]);

    return [targetRef, ignoreRef] as [RefObject<TTargetElement>, RefObject<TIgnoreElement>];
}
