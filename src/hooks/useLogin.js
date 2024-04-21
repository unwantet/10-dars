import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/useContextGlobal";


export default function useLogin() {
    const [user,setUser] = useState(null);
    const [error, setError] = useState(null);

    const {dispatch} = useContext(GlobalContext);


    const SignInWithPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type:"SIGN_IN" , payload:user})
        setUser(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error);
    });
    }

    return {SignInWithPassword , user , error}
}
