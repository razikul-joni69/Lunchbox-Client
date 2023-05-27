/* eslint-disable react/prop-types */
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { showErrorMessage, showSuccessMessage } from "../../utils/Notification";
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

    const emailPasswordUserCreate = async (email, password, name, photoURL) => {
        setError("");
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setError("");
                showSuccessMessage("🦸 User Created Successfully!");
            })
            .catch((err) => {
                setError(err.message);
                showErrorMessage(err.message);
            });

        await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
            .then(() => {})
            .catch((err) => {
                setError(`📈 ${err.message}`);
            });
    };

    const emailPasswordUserLogin = (email, password) => {
        setError("");
        return signInWithEmailAndPassword(auth, email, password);
    };

    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log("signOut Sucessfull");
                showSuccessMessage("👍 SignOut Succesfully!");
            })
            .catch((err) => {
                showErrorMessage(err.message);
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
        <AuthContext.Provider value={authInfo}>
            {children}{" "}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </AuthContext.Provider>
    );
};

export default AuthProvider;
