import { collection, getDocs } from "firebase/firestore";
import { useEffect ,useState } from "react";
import { db } from "../firebase/firebaseConfig";


function UseCollection() {
    const [data, setData] = useState(null)
    const [isPending , setIsPending] = useState(true);
    useEffect(() => {

        const getCollectionData = async () => {
            const querySnapshot = await getDocs(collection(db, "retseplar"));
            const allData = [];
            querySnapshot.forEach((doc) => {
            allData.push({
            id: doc.id , ...doc.data()
            })});
            
    setData(allData)
    if(allData.length > 0) {
        setIsPending(false)
    }
    }
    getCollectionData()
    },[])    


    return {data , isPending}
}


export { UseCollection }