import { useNavigate } from "react-router-dom";
const links = [

    {
        id: 1,
        text: 'Home',
        link: '/'
    },
    {
        id: 2,
        text: 'Create Recipie',
        link: '/create'
    },
    {
        id: 3,
        text: 'Change Theme',
        link: '/themeContainer'
    }
]

 function NavLinks() {
    const navigate = useNavigate();

    const clickNavigate = (link) => {
        navigate(link);
    }

     return(

         <>
     {links.map((link) => {
         return (
            <li key={link.id}>
             <button key={link.id} onClick={()=>clickNavigate(link.link)} className='btn btn-sm mb-3'>
                {link.text}
            </button>           
            </li>
            )
        })}
     </>
    )

}
export default NavLinks;
