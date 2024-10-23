import Input from "./Input.jsx";

export default function NewProject(){
    return (
        <div className="w-[35rem] my-16 ">
            <menu className="flex item-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950">cancel</button></li>
                <li><button className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 ">save</button></li>
            </menu>
            <div>
                <Input label="Title" />
                <Input label="Description" textarea />
                <Input label="Due Date" />
            </div>
        </div>
    );
}