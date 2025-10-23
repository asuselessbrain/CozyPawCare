import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const updateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }

    const logout = () =>{
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const loginWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            }
        })

        return () => unSubscribe()

    }, [])

    const value = {
        createUser,
        user,
        loading,
        setLoading,
        updateUser,
        logout,
        loginWithGoogle,
        loginWithEmail
    }
    return (
        <AuthContext value={value}>{children}</AuthContext>
    );
};

export default AuthProvider;