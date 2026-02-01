import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import PersonalInfoForm from "../components/builder/PersonalInfoForm";
import ResumePreview from "../components/builder/ResumePreview";
import ProgressIndicator from "../components/builder/ProgressIndicator";
import ProfessionalSummaryForm from "../components/builder/ProfessionalSummaryForm";
import ExperienceSection from "../components/builder/ExperienceSection";
import EducationSection from "../components/builder/EducationSection";
import ProjectSection from "../components/builder/ProjectSection";
import SkillsSection from "../components/builder/SkillsSection";
import TemplateSelector from "../components/builder/TemplateSelector";

function ResumeBuilder(){
    const navigate = useNavigate();
    const { resumeId } = useParams();
    const [currentStep, setCurrentstep] = useState(1);
    const [selectedTemplate, setSelectedTemplate] = useState("classic");
    const [resumeData, setResumeData] = useState({
        fullName: "",
        email:"",
        phone:"",
        location:"",
        profession:"",
        linkedin:"",
        website:"",
        summary:"",
        experiences: [],
        education: [],
        projects: [],
        skills: [],
    });

    return(
        <div className="max-w-7xl mx-auto px-6 py-6">
            {/* Top bar */}
            <div className="flex justify-between items-center mb-6">
                <button onClick={()=>navigate("/app")}
                className="text-sm text-gray-500 hover:underline">
                    ← Back to Dashboard   
                </button>
                
            </div>
            {/* Main content */}
            <div className="grid grid-cols-12 gap-6">
                {/* Left form */}
                {/* <div className="col-span-5 bg-white rounded-xl shadow p-6">
                    <PersonalInfoForm resumeData={resumeData} setResumeData={setResumeData} />
                </div> */}
                <div className="col-span-5 bg-white rounded-xl shadow p-6">
                    <ProgressIndicator step={currentStep}  totalSteps={7} />
                    {currentStep ===1 &&(
                        <PersonalInfoForm resumeData={resumeData}
                        setResumeData={setResumeData} 
                        onSave={()=>setCurrentstep(2)} /> 
                    )}
                    {currentStep===2&&(
                        <ProfessionalSummaryForm resumeData={resumeData}
                        setResumeData={setResumeData}
                        onSave={()=>setCurrentstep(3)} />
                    )}
                    {currentStep === 3 && (
                        <ExperienceSection resumeData={resumeData}
                        setResumeData={setResumeData} 
                        onNext={()=>setCurrentstep(4)} />
                    )}
                    {currentStep === 4  && (
                        <EducationSection 
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                        onNext={()=>setCurrentstep(5)} />
                    )}
                    {currentStep === 5 && (
                        <ProjectSection
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                            onNext={() => setCurrentstep(6)}
                        />
                    )}
                    {currentStep === 6 && (
                        <SkillsSection
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                            onNext={() => setCurrentstep(7)}
                        />
                    )}
                    {currentStep === 7 && (
                        <TemplateSelector
                            selectedTemplate={selectedTemplate}
                            setSelectedTemplate={setSelectedTemplate}
                            onNext={() => navigate("/app")}
                        />
                    )}
                </div>
                {/* Right form */}
                <div className="col-span-7 bg-white rounded-xl shadow p-6">
                    <ResumePreview resumeData={resumeData}  selectedTemplate={selectedTemplate} />
                </div>
            </div>
        </div>
    )
}

export default ResumeBuilder