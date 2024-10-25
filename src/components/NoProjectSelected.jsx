import img from '../assets/no-projects.png';
import Button from './Button.jsx';
export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={img} alt="an empty task list" className='w-16 h-16 object-contain mx-auto' />
            <h2 className="text-xl font-bold text-stone-500 mt-4 my-4 ">No Project Selected</h2>
            <p className='text-stone-400 mb-4' >select a project or get started with new one</p>
            <p className='mt-8'>
                <Button onClick={onStartAddProject}>Create New Project </Button>
            </p>
        </div>
    );
}