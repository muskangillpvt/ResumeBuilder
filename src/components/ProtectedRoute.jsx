import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import {auth} from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function ProtectedRoute({children}){
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return() => unsub();
    }, []);
    if(loading){
        return <div className="text-center mt-10">Checking authentication...</div>;
    }
    if(!user){
        return <Navigate to="/" replace />;
    }
    return children;
}
export default ProtectedRoute;