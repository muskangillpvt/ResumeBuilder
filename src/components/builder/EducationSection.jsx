import { GraduationCap } from "lucide-react";
import { useState } from "react";
import EducationForm from "./EducationForm";

function EducationSection({ resumeData, setResumeData, onNext }) {
  const [showForm, setShowForm] = useState(false);

  const addEducation = (education) => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, education],
    });
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Education</h2>
        <button
          onClick={() => setShowForm(true)}
          className="text-sm text-blue-600 hover:underline"
        >
          + Add Education
        </button>
      </div>

      {!showForm && resumeData.education.length === 0 && (
        
        <div>
            <div className="border border-dashed rounded-lg p-10 text-center text-gray-500">
                <GraduationCap size={48} className="mx-auto mb-4 text-gray-400" />
                <p>No education added yet</p>
                <p>Click "Add Education" to get started</p>
            </div>
            
        </div>    
      )}
      {showForm && (
        <EducationForm
          onSave={addEducation}
          onCancel={() => setShowForm(false)}
        />
      )}
      {!showForm && (
        <div className="mt-6 flex justify-end">
            <button
            onClick={onNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
            Save Changes & Continue
            </button>
        </div>
      )}
    </div>
  );
}

export default EducationSection;
