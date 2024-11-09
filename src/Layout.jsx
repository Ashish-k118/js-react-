import { Link, Outlet } from "react-router-dom";


const Layout=()=>{
    return(
      <>

<Link to="home">Home</Link> |
<Link to="about">About</Link> |
<Link to="contect">Contect</Link> |
<hr size="4" color="red"/>

<Outlet/>


ww.myacompany.com 


</>
  )
}
export default Layout;