import {Link} from 'react-router'
export const NavBar=()=>{
    return(
        <>
        <Link to="/">Home</Link><br />
        <Link to="/about">about</Link>
        </>
    );
}