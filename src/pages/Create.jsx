import React from "react";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useFetch } from "../hooks/useFetch";

function Create() {
  const [ingrediend, setIngrediend] = useState("")
  const [name , setName] = useState("")
  const [description , setDescription] = useState("")
  const [img , setImg] = useState("")
  const [cookingTime , setCookingTime] = useState("")

  const {postData} = useFetch("http://localhost:3000/recipies" , "POST" )  
  
  const [ingerediends , setIngrediends] = useState([])
  const [urls , setUrls] = useState([])

  const addURl = (e)=>{
    e.preventDefault();
    
    if(img != ""){
      if(!urls.includes(img)){
        setUrls((prev) => {
          return [...prev, img]})
        toast.success("Url muvoffaqiyatli qoshildi")
      }else{
        toast.error("Bu Url oldin yozilgan") 
      }
    }else{
      toast.error("Url kiriting")
    }}

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


    setImg("")
  }


  const handleSubmit = (e)=>{
    e.preventDefault();

    if(name != "" && description != "" && img != "" && cookingTime != "" && ingerediends.length > 0){
      const newRetsept = {
        name,
        description,
        img,
        cookingTime: cookingTime,
        ingerediends,
      }
      postData(newRetsept)
      window.location.href = "/";
    }
    

  }

  return (
    <div className="min-h-screen  grid place-items-center">
    <div className="max-w-[550px] w-full">

      <h1 className="text-3xl text-center font-bold">
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
            <span className="label-text">Img Url</span>
          </div>
          <div className="flex gap-2">
          <input
            type="url"
            placeholder="Type here"
            className="input input-bordered w-full"
            onChange={(e)=>setImg(e.target.value)}
            value={img}
          />
              <button className="btn btn-secondary" onClick={addURl}>+</button>
              <Toaster/>
              </div>
          <div className="mt-1 ">
            <p className="opacity-70">Photos: {urls.map((index , item)=>{
                return <span key={index} className="badge badge-outline">{item}</span>
            })}</p>
          </div>
        </label>
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

        <button className="btn btn-neutral w-full">Submit</button>
      </form>
            </div>
    </div>
  );
}

export default Create;


