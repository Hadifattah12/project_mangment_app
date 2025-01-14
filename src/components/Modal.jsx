import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from 'react-dom';
import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
    const modal = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                modal.current.showModal();
            }
        };
    });
    return createPortal(
        <dialog ref={modal} className="backdrop:gb-stone-900/90 p-4 rounded-md shadow-md ">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default Modal;