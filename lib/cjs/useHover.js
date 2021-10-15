"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHover = void 0;
var react_1 = require("react");
function useHover() {
    var nodeRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), hovered = _a[0], setHovered = _a[1];
    (0, react_1.useEffect)(function () {
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
exports.useHover = useHover;
