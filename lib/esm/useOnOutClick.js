import { useEffect } from 'react';
function useOnOutClick(targetRef, onOutClick, ignoreRef) {
    useEffect(function () {
        var outClickHanlder = function (e) {
            var _a, _b, _c, _d;
            var target = e.target;
            if (target === targetRef.current ||
                ((_a = targetRef.current) === null || _a === void 0 ? void 0 : _a.isEqualNode(target)) ||
                ((_b = targetRef.current) === null || _b === void 0 ? void 0 : _b.contains(target)) ||
                target === (ignoreRef === null || ignoreRef === void 0 ? void 0 : ignoreRef.current) ||
                ((_c = ignoreRef === null || ignoreRef === void 0 ? void 0 : ignoreRef.current) === null || _c === void 0 ? void 0 : _c.isEqualNode(target)) ||
                ((_d = ignoreRef === null || ignoreRef === void 0 ? void 0 : ignoreRef.current) === null || _d === void 0 ? void 0 : _d.contains(target))) {
                return;
            }
            onOutClick(e);
        };
        window.addEventListener('click', outClickHanlder, true);
        return function () {
            window.removeEventListener('click', outClickHanlder, true);
        };
    }, [onOutClick]);
}
export default useOnOutClick;
