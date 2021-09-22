"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useDebounce(cb, delay, dependencies) {
    var firstRender = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(function () {
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
exports.default = useDebounce;
