import React, {FC, Ref, MutableRefObject} from 'react';

/**
 * Gets a the appropriate position for a modal.
 * @param triggerRect 
 * @param offset 
 * @returns 
 */
export const getModalOffset = (triggerRect : DOMRect, offset : number)=>{

    const left = (triggerRect.left) > (window.innerWidth - triggerRect.right) 
    const down = (triggerRect.top) < (window.innerHeight - triggerRect.bottom)

    return {
        ...left ? {
            right : window.innerWidth - triggerRect.left - offset,
        } : {
            left : triggerRect.left + triggerRect.width + offset,
        },
        ...down ? {
            top : triggerRect.bottom + offset,
        } : {
            bottom :  window.innerHeight - triggerRect.top - offset
        }
    }
    
}

/**
 * 
 */
export type SafeModalProps = {
    itemRef : MutableRefObject<HTMLElement|null>,
    offset? : number,
    isDisplayed: boolean
}

/**
 * 
 * @param param0 
 * @returns 
 */
export const SafeModal : FC<SafeModalProps>  = ({itemRef, offset=5, children, isDisplayed}) =>{

    console.log(itemRef);

    const modalOffset : {
        left? : React.CSSProperties["left"],
        top? : React.CSSProperties["top"],
        right? : React.CSSProperties["right"],
        bottom? : React.CSSProperties["bottom"]
    } = itemRef && itemRef.current ? getModalOffset(itemRef.current.getBoundingClientRect(), offset)
                            : {
                                left : "25%",
                                top : "25%"
                            }

    return (
        <>
            {isDisplayed && <div style={{
                display: "block",
                position : "fixed",
                ...modalOffset,
                zIndex: 1000
            }}>
                {children}
            </div>}
        </>
    )

}