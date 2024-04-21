import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { MdDeleteForever } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import {useFetch} from "../hooks/useFetch";


export default function RetseptInfo() {
    const { id } = useParams()
    

    const { 
      data : retsept ,
      isPending ,
      error  } = useFetch("http://localhost:3000/recipies/"+id)
      if(error) return <h1 className="text-center text-4xl mt-48 font-bold">{error}</h1>
      if(isPending) return <h1 className="text-center text-4xl mt-48 font-bold">Loading...</h1>  



      return(
        <div className="max-w-screen-lg w-full mx-auto px-3 mt-10">
            <h1 className="text-3xl text-center font-bold my-10">
        Recipie elements
      </h1>
        {
        retsept && 
        <div className="flex gap-[20px] flex-wrap">
            <div className="w-full">
                <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box">              
                        <div className="carousel-item" >
                         <img src={retsept.img} className="rounded-box" />
                        </div>
                        <div className="carousel-item" >
                         <img src={retsept.img2} className="rounded-box" />
                        </div>
                        <div className="carousel-item" >
                         <img src={retsept.img3} className="rounded-box" />
                        </div>
                        <div className="carousel-item" >
                         <img src={retsept.img4} className="rounded-box" />
                        </div>
                    </div>
                <h1 className="text-5xl font-bold text-red-500 mb-4 my-10">
                  {retsept.name} 
                  
                </h1>
                <div className="flex items-center gap-3 mt-10">
                <p>Indgradiends : </p>
                <div className="flex gap-2">

                {retsept.ingerediends.map((ing ) => (
                    <p className="badge badge-neutral ">{ing}</p>
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
            </div>
        </div>
        }
        
        </div>
      )
      }
