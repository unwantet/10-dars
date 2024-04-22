import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


// loader 
export const loader = async ({params}) => {

    const docRef = doc(db, "retseplar", params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    return docSnap.data();
    } else {
    console.log("No such document!");
    }


    console.log(params);
    return null;
}


export default function RetseptInfo() {
    const data = useLoaderData(); 
    const retsept = data;

      return(
        <div className="max-w-screen-lg w-full mx-auto px-3 mt-10">
            <h1 className="text-3xl text-center font-bold my-10">
        Recipie elements
      </h1>
        {
        retsept && 
        <div className="flex gap-[20px] flex-wrap">
            <div className="w-full">
                <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box h-[160]">              
                        <div className="carousel-item" >
                            <img src={retsept.img} className="rounded-box max-h-[300px]" />
                        </div>
                        <div className="carousel-item" >
                         <img src={retsept.img2} className="rounded-box max-h-[300px]" />
                        </div>
                        <div className="carousel-item" >
                         <img src={retsept.img3} className="rounded-box max-h-[300px]" />
                        </div>
                        <div className="carousel-item" >
                         <img src={retsept.img4} className="rounded-box max-h-[300px]" />
                        </div>
                    </div>
                <h1 className="text-5xl font-bold text-red-500 mb-4 my-10">
                  {retsept.name} 
                  
                </h1>
                <div className="flex-wrap items-center gap-3 mt-10 sm:flex">
                <p className="mt-2">Indgradiends : </p>
                <div className="flex gap-2">

                {retsept.ingerediends.map((ing ) => (
                    <p className="badge badge-neutral mt-2">{ing}</p>
                ))}
                    </div>
                </div>

                <div className="mt-10">
                    <p>Cooking time : {retsept.cookingTime} minutes</p>
                </div>
                <div>
                    <h2 className="font-semibold text-3xl mt-10">Discription : </h2>
                    <p className="ml-10 mb-10 mt-5">{retsept.description}</p>
                </div>

                 <div className="card-actions justify-end mb-8">
                        <Link to='/' className="btn btn-error">Back</Link>
                 </div>
            </div>
        </div>
        }
        
        </div>
      )
      }
