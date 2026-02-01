import React, {useState} from "react";

function ProfessionalSummaryForm({resumeData, setResumeData, onSave}){
    const [localSummary, setLocalSummary] = useState(resumeData.summary);

    const handleSave = () =>{
        setResumeData({
            ...resumeData,
            summary: localSummary,
        });
        onSave();
    };

    return(
        <div>
            <h2 className="text-lg font-semibold mb-1">Professional Summary</h2>
            <p className="text-sm text-gray-500 mb-4">
                Add summary for your resume here
            </p>
            <textarea value={localSummary} onChange={(e)=>setLocalSummary(e.target.value)}
            placeholder="Write a compelling professional summary that highlights your key strenghts and career objectives..."
            className="w-full h-40 border rounded-md p-3 text-sm"/>
            <p className="text-gray-500 mb-2 text-sm px-10">Tip: Keep it concise (3-4 sentences) and focus on your most relevant achievements and skills.</p>
            <button onClick={handleSave} 
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Save Changes
            </button>
        </div>
    )
}

export default ProfessionalSummaryForm;
