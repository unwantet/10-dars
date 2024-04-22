import { Link, useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";



function AllRetsept( {retsepts} ) {

  const Navigate = useNavigate();
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this recipe?")) {
      try {
        // Assuming db is your Firestore database instance
        await deleteDoc(doc(db, "retseplar", id));
        toast.success("Recipe deleted successfully");
        window.location.reload();
      } catch (error) {
        // Handle error if delete operation fails
        console.error("Error deleting recipe:", error);
        toast.error("Failed to delete recipe");
      }
    }
  };
  
    return (
        <div className="mt-10">  
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">

          <Toaster/>
            {retsepts.map((retsep) => (
                <div key={retsep.id} className="card w-80 bg-base-100 shadow-xl image-full hover:scale-105 hover:brightness- 60 hover:contrast-125 hover:cursor-pointer hover:transition-all">
                <figure>
                <img src={retsep.img} alt={retsep.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-purple-400">{retsep.name}</h2>
                  <p className="line-clamp-3">{retsep.description}</p>
                  <div>
                    <p className="badge badge-info">⌚ {retsep.cookingTime} minutes</p>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-error" onClick={() =>handleDelete(retsep.id)}><MdDelete />
                      </button>
                  <Link to={`/retseptInfo/${retsep.id}`} className="btn btn-outline btn-accent ">More info</Link>
                  </div>
                </div>
              </div>
            ))} 
        </div>
            
        </div>
    )
}

export default AllRetsept