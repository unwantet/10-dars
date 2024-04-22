import { collection, getDocs } from "firebase/firestore";
import { useEffect ,useState } from "react";
import { db } from "../firebase/firebaseConfig";


function UseCollection() {
    const [data, setData] = useState(null)
    useEffect(() => {

        const getCollectionData = async () => {
            const querySnapshot = await getDocs(collection(db, "retseplar"));
            const allData = [];
        querySnapshot.forEach((doc) => {

        allData.push({
            id: doc.id , ...doc.data()
        })
        
        
    });
    setData(allData)
    }
    getCollectionData()
    },[])    


    return {data}
}


export { UseCollection }