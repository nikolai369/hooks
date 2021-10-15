import { RefObject, useEffect, useRef, useState } from 'react';

export function useHover<TNode extends HTMLElement>() {
    const nodeRef = useRef<TNode>(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const node = nodeRef.current;

        function handleMouseOver() {
            setHovered(true);
        }

        function handleMouseOut() {
            setHovered(false);
        }

        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);
            return () => {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
            };
        }

        return () => {};
    }, [nodeRef.current]);

    return [nodeRef, hovered] as [RefObject<TNode>, boolean];
}
