import { RefObject, useEffect } from 'react';

function useOnOutClick(
    targetRef: RefObject<HTMLElement>,
    onOutClick: ((e: globalThis.MouseEvent) => void) | (() => void),
    ignoreRef?: RefObject<HTMLElement>
) {
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
    }, [onOutClick]);
}

export default useOnOutClick;
