import React from 'react'


export default function FormInput({label , type, url , name}) {
    

    return (
        <label className="input input-bordered flex items-center gap-2 mb-5">
        {url ? <img src={url} alt="logo" className="w-6 h-6 opacity-45" /> : null}
        <input type={type} className="grow" placeholder={label} name={name}/>
        </label>
        
    )
}
