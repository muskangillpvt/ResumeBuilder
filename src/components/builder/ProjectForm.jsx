import { useState } from "react";

function ProjectForm({ onSave, onCancel }) {
  const [project, setProject] = useState({
    name: "",
    type: "",
    description: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <input
        name="name"
        placeholder="Project Name"
        value={project.name}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />

      <input
        name="type"
        placeholder="Project Type (Academic / Personal / Freelance)"
        value={project.type}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />

      <textarea
        name="description"
        placeholder="Describe your project..."
        value={project.description}
        onChange={handleChange}
        className="w-full border rounded p-2 h-28"
      />

      <div className="flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="text-sm text-gray-500"
        >
          Cancel
        </button>

        <button
          onClick={() => onSave(project)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Save Project
        </button>
      </div>
    </div>
  );
}

export default ProjectForm;
