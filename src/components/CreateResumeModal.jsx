import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function CreateResumeModal({onClose}){
    const [title, setTitle] = useState("");
    const navigate = useNavigate();
    const handleCreate = () =>{
        if(!title.trim()){
            alert("Please enter resume title");
            return;
        }
        const resumeId = uuidv4();
        navigate(`/app/builder/${resumeId}`);
    };
    return(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-[360px] p-6 relative">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                    ✕
                </button>
                <h2 className="text-lg font-semibold text-slate-800 mb-4">
                    Create a Resume
                </h2>
                <input type="text" placeholder="Enter resume title" value={title} onChange={(e)=>setTitle(e.target.value)}
                className="w-full border border-blue-500 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <button onClick={handleCreate} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Create Resume
                </button>
            </div>
        </div>
    )
}
export default CreateResumeModal;