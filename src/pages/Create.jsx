import React from "react";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { UseCreateRecipie } from "../hooks/useCreateRecipie";
import { useNavigate } from "react-router-dom";

function Create() {
  const {data , createRecipie} = UseCreateRecipie();
  const [ingrediend, setIngrediend] = useState("")
  const [name , setName] = useState("")
  const [description , setDescription] = useState("")
  const [img , setImg] = useState("")
  const [cookingTime , setCookingTime] = useState("")
  const [img2 , setImg2] = useState("")
  const [img3 , setImg3] = useState("")
  const [img4 , setImg4] = useState("")
  const navigate = useNavigate();

  
  const [ingerediends , setIngrediends] = useState([])


  const addIngrediend = (e)=>{
    e.preventDefault();
    
    if(ingrediend != ""){
      if(!ingerediends.includes(ingrediend)){
        setIngrediends((prev) => {
          return [...prev, ingrediend]})
        toast.success("Ingrediend muvoffaqiyatli qoshildi")
      }else{
        toast.error("Bu ingrediend oldin yozilgan") 
      }
    }else{
      toast.error("Ingrediendni kiriting")
    }


    setIngrediend("")
  }



  const handleSubmit = (e)=>{
    e.preventDefault();

    if(name != "" && description != "" && img != "" && cookingTime != "" && ingerediends.length > 0){
      const newRetsept = {
        name,
        description,
        img,
        img2,
        img3,
        img4,
        cookingTime: cookingTime,
        ingerediends,
      }
      createRecipie(newRetsept)
      navigate("/")
      
    }
    

  }

  return (
    <div className="min-h-screen  grid place-items-center">
    <div className="max-w-[550px] w-full">

      <h1 className="text-3xl text-center font-bold mt-[-40px]">
        Create New Recipie
      </h1>

      <form className="flex items-center flex-col gap-1 w-full " onSubmit={handleSubmit}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Name of retsept</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
            onChange={(e)=>setName(e.target.value)}
            value={name}
            />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Cooking Time in minutes</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
            onChange={(e)=>setCookingTime(e.target.value)}
            value={cookingTime}
            />
        </label>

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Ingrediendlar</span>
          </div>
          <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            
            onChange={(e)=>setIngrediend(e.target.value)}
            value={ingrediend}
          />
        <button className="btn btn-secondary" onClick={addIngrediend}>add</button>
        <Toaster/>
          </div>
          <div className="mt-1 ">
            <p className="opacity-70">Ingrediendlar: {ingerediends.map((ing)=>{
                return <span key={ing} className="badge badge-outline">{ing}</span>
            })}</p>
          </div>
        </label>

        

       
        <label className="form-control w-full">
        <div className="label">
        <span className="label-text">Img Urls</span>
        </div>
          <div className="flex gap-2">
          <label className="form-control w-full">
          <input
            type="url"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
            onChange={(e)=>setImg(e.target.value)}
            value={img}
            />
        </label>
        <label className="form-control w-full">
          <input
            type="url"
            placeholder="Type here"
            className="input input-bordered w-full"
            
            onChange={(e)=>setImg2(e.target.value)}
            value={img2}
            />
        </label>
        <label className="form-control w-full">
          <input
            type="url"
            placeholder="Type here"
            className="input input-bordered w-full"
            
            onChange={(e)=>setImg3(e.target.value)}
            value={img3}
            />
        </label>
        <label className="form-control w-full">
          <input
            type="url"
            placeholder="Type here"
            className="input input-bordered w-full"
            
            onChange={(e)=>setImg4(e.target.value)}
            value={img4}
            />
        </label>
            </div>
        </label>
              <Toaster/>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Write Description"
            required
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            ></textarea>
        </label>

        <button className="btn btn-neutral w-full mt-6">Submit</button>
      </form>
            </div>
    </div>
  );
}

export default Create;


