import { useEffect, useRef, useState } from 'react';
export function useHover() {
    var nodeRef = useRef(null);
    var _a = useState(false), hovered = _a[0], setHovered = _a[1];
    useEffect(function () {
        var node = nodeRef.current;
        function handleMouseOver() {
            setHovered(true);
        }
        function handleMouseOut() {
            setHovered(false);
        }
        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);
            return function () {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
            };
        }
        return function () { };
    }, [nodeRef.current]);
    return [nodeRef, hovered];
}
