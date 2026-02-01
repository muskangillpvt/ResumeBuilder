import { useState } from "react";

function EducationForm({ onSave, onCancel }){
    const [education, setEducation] = useState({
        institution: "",
        degree:"",
        fieldofStudy:"",
        startYear:"",
        endYear:"",
        gpa:"",
    });
    const handleChange = (e) => {
        setEducation({ ...education, [e.target.name]: e.target.value });
    };
    return (
        <div className="space-y-4">
            <input name="institution" placeholder="Institution Name"
            value={education.institution} onChange={handleChange}
            className="w-full border rounded p-2" />
            <input name="degree" placeholder="Degree" value={education.degree}
            onChange={handleChange} className="w-full border rounded p-2" />
            <input name="fieldofStudy" placeholder="Field of Study" value={education.fieldofStudy}
            onChange={handleChange} className="w-full border rounded p-2" />
            <div className="grid grid-cols-2 gap-4">
                <input name="startYear" placeholder="Start Year" value={education.startYear} 
                onChange={handleChange} className="border rounded p-2" />
                <input name="endYear" placeholder="End Year" value={education.endYear}
                onChange={handleChange} className="border rounded p-2" />
            </div>
            <input name="gpa" placeholder="GPA(optional)" 
            value={education.gpa} onChange={handleChange} 
            className="w-full border rounded p-2" />
            <div className="flex justify-end gap-3">
                <button className="text-sm text-gray-500"
                onClick={onCancel}>
                    Cancel
                </button>
                <button onClick={()=>onSave(education)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md">
                    Save Education
                </button>
            </div>
        </div>
    )
}
export default EducationForm;