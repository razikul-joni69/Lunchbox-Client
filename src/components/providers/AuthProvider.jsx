import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../configs/firebase.config";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = () => {
    const continueWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                console.log(res.user);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div>
            <button onClick={continueWithGoogle}>sign in</button>
        </div>
    );
};

export default AuthProvider;
