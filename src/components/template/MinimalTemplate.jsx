import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function MinimalTemplate({ resumeData }) {
  return (
    <div className="bg-white p-8 text-sm">

      {/* HEADER */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">
          {resumeData.fullName || "Your Name"}
        </h1>

        <div className="mt-2 text-gray-600 space-y-1">
          {resumeData.location && <p>{resumeData.location}</p>}
          <div className="flex justify-center gap-4 flex-wrap">
            {resumeData.phone && (
              <span className="flex items-center gap-1">
                <Phone size={14} /> {resumeData.phone}
              </span>
            )}
            {resumeData.email && (
              <span className="flex items-center gap-1">
                <Mail size={14} /> {resumeData.email}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* SECTION */}
      {resumeData.summary && (
        <Section title="Resume Objective">
          <p className="text-gray-700 leading-relaxed">
            {resumeData.summary}
          </p>
        </Section>
      )}

      {/* EDUCATION */}
      {resumeData.education.length > 0 && (
        <Section title="Education">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-gray-500 text-xs">{edu.endYear}</p>
              </div>
              <p className="text-gray-600">
                {edu.institution}
              </p>
            </div>
          ))}
        </Section>
      )}

      {/* SKILLS */}
        {resumeData.skills.length > 0 && (
            <Section title="Skills">
                <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                    <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                    >
                    {skill}
                    </span>
                ))}
                </div>
            </Section>
            )}

            {/* PROJECTS */}
    {resumeData.projects?.length > 0 && (
    <Section title="Projects">
        <div className="grid grid-cols-2 gap-6">
        {resumeData.projects.map((proj, index) => (
            <div key={index}>
            <h3 className="font-semibold text-gray-800">
                {proj.name}
            </h3>

            {proj.type && (
                <p className="text-xs text-gray-500 mb-1">
                {proj.type}
                </p>
            )}

            <p className="text-gray-700 text-sm">
                {proj.description}
            </p>
            </div>
        ))}
        </div>
    </Section>
    )}


      {/* WORK HISTORY */}
      {resumeData.experiences.length > 0 && (
        <Section title="Work History">
          {resumeData.experiences.map((exp, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between">
                <p className="font-semibold">{exp.title}</p>
                <p className="text-xs text-gray-500">
                  {exp.startDate} – {exp.currentlyWorking ? "Present" : exp.endDate}
                </p>
              </div>
              <p className="text-gray-600">{exp.company}</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
                {exp.description
                  ?.split("\n")
                  .map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
              </ul>
            </div>
          ))}
        </Section>
      )}

      {/* ACCOMPLISHMENTS */}
      {resumeData.accomplishments?.length > 0 && (
        <Section title="Accomplishments">
          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            {resumeData.accomplishments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}

export default MinimalTemplate;

/* Reusable Section Component */
function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="text-blue-600 font-semibold uppercase text-sm">
        {title}
      </h2>
      <hr className="border-blue-400 my-2" />
      {children}
    </div>
  );
}
