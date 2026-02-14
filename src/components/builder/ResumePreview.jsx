import React from "react";
import { Mail, Phone, MapPin, Edit3, Globe} from "lucide-react";
import ClassicTemplate from "../template/ClassicTemplate";
import MinimalTemplate from "../template/MinimalTemplate";

function ResumePreview({ resumeData, selectedTemplate }){
    if (selectedTemplate === "modern") {
        return <ClassicTemplate resumeData={resumeData} />;
    }
    if (selectedTemplate === "minimal") {
        return <MinimalTemplate resumeData={resumeData} />;
    }
    return(
        <div id="resume-preview" className="p-6 bg-white rounded-md">
            <h1 className="text-2xl font-bold text-blue-600 text-center">
                {resumeData.fullName || "Your Name"}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-3 text-sm">
                {resumeData.email && <span className="flex gap-1"><Mail size={14}/>{resumeData.email}</span>}
                {resumeData.phone && <span className="flex gap-1"><Phone size={14}/>{resumeData.phone}</span>}
                {resumeData.location && <span className="flex gap-1"><MapPin size={14}/>{resumeData.location}</span>}
                {resumeData.linkedin && <span className="flex gap-1"><Edit3 size={14}/>{resumeData.linkedin}</span>}
            </div>
            {resumeData.website && (
                <div className="flex justify-center mt-2 text-sm">
                    <Globe size={14} className="mr-1"/>{resumeData.website}
                </div>
            )}
            <hr className="mt-4 border-blue-400" />
            {resumeData.summary && (
                <div>
                    <h1 className="text-xl text-blue-600 font-semibold mt-4">PROFESSIONAL SUMMARY</h1>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                        {resumeData.summary}
                    </p>
                </div>
            )}
            {resumeData.experiences.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">
                    PROFESSIONAL EXPERIENCE
                    </h2>

                    {resumeData.experiences.map((exp, index) => (
                    <div key={index} className="flex gap-4 mb-6">
                        {/* Blue line */}
                        <div className="w-1 bg-blue-500 rounded" />

                        <div className="flex-1">
                        <div className="flex justify-between">
                            <div>
                            <h3 className="font-semibold">{exp.title}</h3>
                            <p className="text-sm text-gray-600">{exp.company}</p>
                            </div>
                            <p className="text-sm text-gray-500">
                            {exp.startDate} -{" "}
                            {exp.currentlyWorking ? "Present" : exp.endDate}
                            </p>
                        </div>

                        <p className="text-sm text-gray-700 mt-2">
                            {exp.description}
                        </p>
                        </div>
                    </div>
                    ))}
                </div>
                )}
            {resumeData.education.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">
                    EDUCATION
                    </h2>

                    {resumeData.education.map((edu, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="font-semibold">
                        {edu.degree}
                        {edu.fieldofStudy && ` - ${edu.fieldofStudy}`}
                        </h3>

                        <p className="text-sm text-gray-600">
                        {edu.institution} ({edu.startYear} – {edu.endYear})
                        </p>

                        {edu.gpa && (
                        <p className="text-sm text-gray-500">
                            GPA: {edu.gpa}
                        </p>
                        )}
                    </div>
                    ))}
                </div>
            )}
            {resumeData.projects.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">
                    PROJECTS
                    </h2>

                    {resumeData.projects.map((proj, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="font-semibold">{proj.name}</h3>

                        {proj.type && (
                        <p className="text-sm text-gray-600">{proj.type}</p>
                        )}

                        <p className="text-sm text-gray-700 mt-1">
                        {proj.description}
                        </p>
                    </div>
                    ))}
                </div>
            )}
            {resumeData.skills.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-blue-600 mb-3">
                    SKILLS
                    </h2>

                    <div className="flex flex-wrap gap-2">
                    {resumeData.skills.map((skill, index) => (
                        <span
                        key={index}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                        >
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
            )}
        </div>
    )
}
export default ResumePreview;