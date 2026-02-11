import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

function ClassicTemplate({ resumeData }) {
  return (
    <div className="flex bg-white shadow rounded-md overflow-hidden text-sm modern-template">
      
      {/* LEFT SIDEBAR */}
      <div className="w-[30%] bg-gray-100 p-5">
        
        {/* CONTACT */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold tracking-widest text-gray-500 mb-2">
            CONTACT
          </h3>

          <div className="space-y-2 text-gray-700 text-xs">
            
            {resumeData.phone && (
              <div className="flex items-start gap-2">
                <Phone size={14} className="mt-[2px]" />
                <span>{resumeData.phone}</span>
              </div>
            )}

            {resumeData.email && (
              <div className="flex items-start gap-2 break-all">
                <Mail size={14} className="mt-[2px]" />
                <span>{resumeData.email}</span>
              </div>
            )}

            {resumeData.location && (
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-[2px]" />
                <span>{resumeData.location}</span>
              </div>
            )}

            {resumeData.website && (
              <div className="flex items-start gap-2 break-all">
                <Globe size={14} className="mt-[2px]" />
                <span>{resumeData.website}</span>
              </div>
            )}
          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest text-gray-500 mb-2">
            EDUCATION
          </h3>

          {resumeData.education?.map((edu, index) => (
            <div key={index} className="mb-3">
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-gray-600 text-xs">
                {edu.institution}
              </p>
              <p className="text-gray-500 text-xs">
                {edu.startYear} – {edu.endYear}
              </p>
            </div>
          ))}
        </div>

        {/* SKILLS */}
        {resumeData.skills?.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xs font-semibold tracking-widest text-gray-500 mb-2">
              SKILLS
            </h3>

            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-[70%] p-6">
        
        {/* HEADER */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {resumeData.fullName || "Your Name"}
          </h1>
          <p className="text-gray-500 uppercase text-xs tracking-widest mt-1">
            {resumeData.profession}
          </p>
        </div>

        {/* SUMMARY */}
        {resumeData.summary && (
          <div className="mb-5">
            <h2 className="font-semibold mb-2">SUMMARY</h2>
            <p className="text-gray-700 leading-relaxed">
              {resumeData.summary}
            </p>
          </div>
        )}

        {/* EXPERIENCE */}
        {resumeData.experiences?.length > 0 && (
          <div className="mb-5">
            <h2 className="font-semibold mb-3">EXPERIENCE</h2>

            {resumeData.experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <p className="font-semibold">{exp.title}</p>
                  <p className="text-xs text-gray-500">
                    {exp.startDate} –{" "}
                    {exp.currentlyWorking ? "Present" : exp.endDate}
                  </p>
                </div>
                <p className="text-gray-600 text-sm">{exp.company}</p>
                <p className="text-gray-700 mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* PROJECTS */}
        {resumeData.projects?.length > 0 && (
          <div>
            <h2 className="font-semibold mb-3">PROJECTS</h2>

            {resumeData.projects.map((proj, index) => (
              <div key={index} className="mb-3">
                <p className="font-semibold">{proj.name}</p>
                <p className="text-gray-700">{proj.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default ClassicTemplate;
