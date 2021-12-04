import { FC, MutableRefObject } from 'react';
/**
 * Gets a the appropriate position for a modal.
 * @param triggerRect
 * @param offset
 * @returns
 */
export declare const getModalOffset: (triggerRect: DOMRect, offset: number) => {
    top: number;
    right: number;
} | {
    bottom: number;
    right: number;
} | {
    top: number;
    left: number;
} | {
    bottom: number;
    left: number;
};
/**
 *
 */
export declare type SafeModalProps = {
    itemRef: MutableRefObject<HTMLElement | null>;
    offset?: number;
    isDisplayed: boolean;
};
/**
 *
 * @param param0
 * @returns
 */
export declare const SafeModal: FC<SafeModalProps>;
