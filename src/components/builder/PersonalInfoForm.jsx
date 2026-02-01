import React, { useState } from "react";
import {User, Mail, Phone, MapPin, Briefcase, Edit3, Globe} from "lucide-react";

function PersonalInfoForm({resumeData, setResumeData, onSave }){
    const [localFormData, setLocalFormData] = useState(resumeData);
    const handleChange = (e) => {
        setLocalFormData({
            ...localFormData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSave = () =>{
        setResumeData(localFormData);
        onSave();
    };
    return(
        <div>
            <h2 className="text-lg font-semibold mb-1">Personal Information</h2>
            <p className="text-sm text-gray-500 mb-4">
                Get Started with your details
            </p>
            <div className="space-y-4">
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-1">
                        <User className="w-4 h-4" />
                        Full Name 
                    </label>
                    <input name="fullName" placeholder="Enter your Full Name" className="w-full border rounded-md px-3 py-2" onChange={handleChange}/>
                </div>
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-1">
                        <Mail className="w-4 h-4" />
                        Email 
                    </label> 
                    <input name="email" placeholder="Enter your Email address"
                    className="w-full border rounded-md px-3 py-2"
                    onChange={handleChange} />
                </div>
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-1">
                        <Phone className="w-4 h-4" />
                        Phone
                    </label>
                    <input name="phone" placeholder="Enter your Phone Number"
                    className="w-full border rounded-md px-3 py-2"
                    onChange={handleChange} />
                </div>
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-1">
                        <MapPin className="w-4 h-4" />
                        Location
                    </label>
                    <input name="location" placeholder="Enter your Location"
                    className="w-full border rounded-md px-3 py-2"
                    onChange={handleChange} />
                </div>
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-1">
                        <Briefcase className="w-4 h-4"/>
                        Profession
                    </label>
                    <input name="profession" placeholder="Enter your Profession"
                    className="w-full border rounded-md px-3 py-2"
                    onChange={handleChange} />
                </div>
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-1">
                        <Edit3 className="w-4 h-4" />
                        LinkedIn Profile
                    </label>
                    <input name="linkedin" placeholder="https://linkedin.com/in/username" 
                    className="w-full border rounded-md px-3 py-2" 
                    onChange={handleChange} />
                </div>
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-1">
                        <Globe className="w-4 h-4" />
                        Personal Website
                    </label>
                    <input name="website" placeholder="https://yourwebsite.com" className="w-full border rounded-md px-3 py-2"
                    onChange={handleChange} />
                </div>
                <button onClick={handleSave}
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Save Changes
                </button>
            </div>
        </div>
    )
}
export default PersonalInfoForm