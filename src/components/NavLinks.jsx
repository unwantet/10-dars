import { Link } from "react-router-dom";
const links = [

    {
        id: 1,
        text: 'Home',
        link: '/'
    },
    {
        id: 2,
        text: 'About',
        link: '/about'
    },
    {
        id: 3,
        text: 'Contact',
        link: '/contact'
    }
]

 function NavLinks() {
     return(

         <>
     {links.map((link) => {
         return (
             <Link key={link.id} to={link.link} className='px-3 py-3 hover:bg-base-content rounded hover:text-white'>
                {link.text}
            </Link>
            
            )
        })}
     </>
    )

}
export default NavLinks;
