import { Briefcase } from "lucide-react";
import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

function ExperienceSection({ resumeData, setResumeData, onNext }) {
  const [showForm, setShowForm] = useState(false);

  const addExperience = (experience) => {
    setResumeData({
      ...resumeData,
      experiences: [...resumeData.experiences, experience],
    });
    setShowForm(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Professional Experience</h2>
        <button
          onClick={() => setShowForm(true)}
          className="text-sm text-blue-600 hover:underline"
        >
          + Add Experience
        </button>
      </div>

      {/* Empty state */}
      {!showForm && resumeData.experiences.length === 0 && (
        <div className="border border-dashed rounded-lg p-10 text-center text-gray-500">
          <Briefcase size={48} className="mx-auto mb-4 text-gray-400" />
          <p>No work experience added yet</p>
          <p className="text-sm">This section is optional</p>
        </div>
      )}

      {/* Existing experiences preview */}
      {!showForm && resumeData.experiences.length > 0 && (
        <div className="space-y-3">
          {resumeData.experiences.map((exp, index) => (
            <div
              key={index}
              className="border rounded-md p-3 bg-gray-50"
            >
              <p className="font-medium">{exp.title}</p>
              <p className="text-sm text-gray-600">{exp.company}</p>
            </div>
          ))}
        </div>
      )}

      {/* Form */}
      {showForm && <ExperienceForm onSave={addExperience} />}

      {/* Save & Continue */}
      {!showForm && (
        <button
          onClick={onNext}
          className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
        >
          Save & Continue
        </button>
      )}
    </div>
  );
}

export default ExperienceSection;
