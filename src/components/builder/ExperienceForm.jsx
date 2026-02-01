import { useState } from "react";

function ExperienceForm({ onSave }) {
  const [experience, setExperience] = useState({
    company: "",
    title: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setExperience({
      ...experience,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Experience</h3>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="month"
          name="startDate"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        {!experience.currentlyWorking && (
          <input
            type="month"
            name="endDate"
            onChange={handleChange}
            className="border p-2 rounded"
          />
        )}
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name="currentlyWorking"
          onChange={handleChange}
        />
        Currently working here
      </label>

      <textarea
        name="description"
        placeholder="Describe your role and achievements..."
        onChange={handleChange}
        className="w-full border rounded p-2 h-28"
      />

      <button
        onClick={() => onSave(experience)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Experience
      </button>
    </div>
  );
}

export default ExperienceForm;
