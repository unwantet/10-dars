import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase/firebaseConfig";
import { useEffect } from "react";
import { useState } from 'react';


function UseCreateRecipie() {
    const [data,setData] = useState(null)
        const createRecipie = async (newRetsept) => {
            const docRef = await addDoc(collection(db, "retseplar"),newRetsept
                );
              console.log("Document written with ID: ", docRef.id);
              setData(docRef.id)
        }




    return {data , createRecipie}
}

export {UseCreateRecipie}