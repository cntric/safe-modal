import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * Gets a the appropriate position for a modal.
 * @param triggerRect
 * @param offset
 * @returns
 */
export const getModalOffset = (triggerRect, offset) => {
    const left = (triggerRect.left) > (window.innerWidth - triggerRect.right);
    const down = (triggerRect.top) < (window.innerHeight - triggerRect.bottom);
    return {
        ...left ? {
            right: window.innerWidth - triggerRect.left - offset,
        } : {
            left: triggerRect.left + triggerRect.width + offset,
        },
        ...down ? {
            top: triggerRect.bottom + offset,
        } : {
            bottom: window.innerHeight - triggerRect.top - offset
        }
    };
};
/**
 *
 * @param param0
 * @returns
 */
export const SafeModal = ({ itemRef, offset = 5, children, isDisplayed }) => {
    console.log(itemRef);
    const modalOffset = itemRef && itemRef.current ? getModalOffset(itemRef.current.getBoundingClientRect(), offset)
        : {
            left: "25%",
            top: "25%"
        };
    return (_jsx(_Fragment, { children: isDisplayed && _jsx("div", { style: {
                display: "block",
                position: "fixed",
                ...modalOffset,
                zIndex: 1000
            }, children: children }, void 0) }, void 0));
};
