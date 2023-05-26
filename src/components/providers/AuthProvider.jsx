/* eslint-disable react/prop-types */
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../configs/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        // return unsubscribe();
    }, [user]);

    const emailPasswordUserCreate = (email, password) => {
        setError("");
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setError("");
            })
            .catch((err) => {
                console.log(err.message);
                setError(err.message);
            });
    };

    const emailPasswordUserLogin = (email, password) => {
        setError("");
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setError("");
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    const continueWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                setError("");
            })
            .catch((err) => {
                console.log(err.message);
                setError(err.message);
            });
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log("signOut Sucessfull");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const authInfo = {
        user,
        loading,
        error,
        setError,
        emailPasswordUserCreate,
        emailPasswordUserLogin,
        continueWithGoogle,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
