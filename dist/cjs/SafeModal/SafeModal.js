"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeModal = exports.getModalOffset = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * Gets a the appropriate position for a modal.
 * @param triggerRect
 * @param offset
 * @returns
 */
const getModalOffset = (triggerRect, offset) => {
    const left = (triggerRect.left) > (window.innerWidth - triggerRect.right);
    const down = (triggerRect.top) < (window.innerHeight - triggerRect.bottom);
    return Object.assign(Object.assign({}, left ? {
        right: window.innerWidth - triggerRect.left - offset,
    } : {
        left: triggerRect.left + triggerRect.width + offset,
    }), down ? {
        top: triggerRect.bottom + offset,
    } : {
        bottom: window.innerHeight - triggerRect.top - offset
    });
};
exports.getModalOffset = getModalOffset;
/**
 *
 * @param param0
 * @returns
 */
const SafeModal = ({ itemRef, offset = 5, children, isDisplayed }) => {
    console.log(itemRef);
    const modalOffset = itemRef && itemRef.current ? (0, exports.getModalOffset)(itemRef.current.getBoundingClientRect(), offset)
        : {
            left: "25%",
            top: "25%"
        };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isDisplayed && (0, jsx_runtime_1.jsx)("div", Object.assign({ style: Object.assign(Object.assign({ display: "block", position: "fixed" }, modalOffset), { zIndex: 1000 }) }, { children: children }), void 0) }, void 0));
};
exports.SafeModal = SafeModal;
