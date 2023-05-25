/* eslint-disable react/prop-types */
import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../configs/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
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

    const continueWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                console.log(res.user);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const logOut = () => {
        signOut(auth)
            .then((res) => {
                console.log("signOut Sucessfull", res);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const authInfo = {
        user,
        loading,
        continueWithGoogle,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
