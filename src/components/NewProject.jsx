import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const duedate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = duedate.current.value;

        if (enteredTitle.trim() === ''
            || enteredDescription.trim() === ''
            || enteredDueDate.trim() === ' ') {
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }
    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">invalid input</h2>
                <p className="text-stone-600 mb-4">look loke you forget to enter a value</p>
                <p className="text-stone-600 mb-4" >please make sure you provide a valid value for every input field</p>
            </Modal>
            <div className="w-[35rem] my-16 ">
                <menu className="flex item-center justify-end gap-4 my-4">
                    <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>cancel</button></li>
                    <li>
                        <button
                            className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
                            onClick={handleSave} >save</button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={duedate} label="Due Date" />
                </div>
            </div>
        </>
    );
}