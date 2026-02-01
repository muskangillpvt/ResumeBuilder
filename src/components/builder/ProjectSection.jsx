import { FolderGit2 } from "lucide-react";
import { useState } from "react";
import ProjectForm from "./ProjectForm";

function ProjectSection({ resumeData, setResumeData, onNext }) {
  const [showForm, setShowForm] = useState(false);

  const addProject = (project) => {
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, project],
    });
    setShowForm(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Projects</h2>
        <button
          onClick={() => setShowForm(true)}
          className="text-sm text-blue-600 hover:underline"
        >
          + Add Project
        </button>
      </div>

      {/* Empty state */}
      {!showForm && resumeData.projects.length === 0 && (
        <div className="border border-dashed rounded-lg p-10 text-center text-gray-500">
          <FolderGit2 size={48} className="mx-auto mb-4 text-gray-400" />
          <p>No projects added yet</p>
          <p className="text-sm">Click "Add Project" to get started</p>
        </div>
      )}

      {/* Existing projects */}
      {!showForm && resumeData.projects.length > 0 && (
        <div className="space-y-3">
          {resumeData.projects.map((proj, index) => (
            <div
              key={index}
              className="border rounded-md p-3 bg-gray-50"
            >
              <p className="font-medium">{proj.name}</p>
              <p className="text-sm text-gray-600">{proj.type}</p>
            </div>
          ))}
        </div>
      )}

      {/* Form */}
      {showForm && (
        <ProjectForm
          onSave={addProject}
          onCancel={() => setShowForm(false)}
        />
      )}

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

export default ProjectSection;
