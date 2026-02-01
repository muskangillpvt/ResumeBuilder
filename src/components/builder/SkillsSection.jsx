import { useState } from "react";
import { Star } from "lucide-react";

function SkillsSection({ resumeData, setResumeData, onNext }) {
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    if (!skillInput.trim()) return;

    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, skillInput.trim()],
    });

    setSkillInput("");
  };

  const removeSkill = (index) => {
    const updatedSkills = resumeData.skills.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, skills: updatedSkills });
  };

  return (
    <div>
      {/* Header */}
      <h2 className="text-lg font-semibold">Skills</h2>
      <p className="text-sm text-gray-500 mb-4">
        Add your technical and soft skills
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          placeholder="Enter a skill (e.g. JavaScript, Project Management)"
          className="border rounded-md px-3 py-2 text-sm"
        />
        <button
          onClick={addSkill}
          className="bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* Empty State */}
      {resumeData.skills.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          <Star className="mx-auto mb-3 text-gray-400" />
          <p className="font-medium">No skills added yet</p>
          <p className="text-sm">Get started by adding your skills</p>

          {/* Tip box */}
          <div className="mt-4 bg-blue-50 border border-blue-200 text-blue-700 text-sm p-3 rounded-md">
            💡 Add 8–12 relevant skills including technical (programming
            languages, tools) and soft skills (leadership, communication)
          </div>
        </div>
      )}

      {/* Skills list */}
      {resumeData.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {resumeData.skills.map((skill, index) => (
            <span
              key={index}
              className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {skill}
              <button
                onClick={() => removeSkill(index)}
                className="text-gray-500 hover:text-red-500"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Save & Continue */}
      <button
        onClick={onNext}
        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
      >
        Save & Continue
      </button>
    </div>
  );
}

export default SkillsSection;
