import React, {useState} from "react";
import CreateResumeModal from "../components/CreateResumeModal";

function Dashboard(){
    const [showModal, setShowModal] = useState(false);
    return(
        <div className="max-w-5xl mx-auto px-4 mt-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Start your resume
            </h2>
            <div className="flex gap-6">
                <div onClick={()=>setShowModal(true)}
                className="w-40 h-44 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-slate-500 hover:bg-slate-50 transition-all">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">
                        +
                    </div>
                    <p className="text-sm font-medium text-slate-700">
                        Create Resume
                    </p>
                </div>
                
            </div>
            {showModal && (
                <CreateResumeModal onClose={()=>setShowModal(false)} />
            )}
        </div>
    )
}

export default Dashboard