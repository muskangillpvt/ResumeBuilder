import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {auth} from "../firebase";
import { signOut, onAuthStateChanged } from 'firebase/auth';

function Navbar(){
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUserName(user.displayName || user.email);
            }
        });
        return() => unsub();
    }, []);
    const logoutUser = async () =>{
        try {
            await signOut(auth);
            navigate("/");
        }catch(error){
            alert("Logout failed: " + error.message);
        }
    }
    return(
        <div className='shadow bg-white'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
                <Link to="/app">
                    <span className='text-xl font-semibold tracking-wide'>Resume Builder</span>
                </Link>
                <div className='flex items-center gap-4'>
                    <p className='text-sm font-medium'>Hi, <span>{" "}{userName}</span></p>
                    <button onClick={logoutUser} className='bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
                </div>
            </nav>
        </div>
    )
}
export default Navbar