import React from "react";
import { Check } from "lucide-react";

const templates = [
  {
    id: "classic",
    name: "Classic",
    description: "Clean and professional layout suitable for all roles",
  },
  {
    id: "modern",
    name: "Modern",
    description: "Stylish design with strong visual hierarchy",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple, distraction-free resume for ATS systems",
  },
];

function TemplateSelector({ selectedTemplate, setSelectedTemplate, onNext }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Choose a Resume Template
      </h2>

      <div className="space-y-4">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => setSelectedTemplate(template.id)}
            className={`cursor-pointer border rounded-lg p-4 transition
              ${
                selectedTemplate === template.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{template.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {template.description}
                </p>
              </div>

              {selectedTemplate === template.id && (
                <Check className="text-blue-600" size={20} />
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Continue
      </button>
    </div>
  );
}

export default TemplateSelector;
