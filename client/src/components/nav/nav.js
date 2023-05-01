import { NavLink } from "react-router-dom";


export default function Main (){
    return (
        <div className="d-flex" id="navlist">
                <ul className="nav   mb-2" >
                <li className= "nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink> 
                </li>
                <li className= "nav-item">
                        <NavLink className="nav-link" to="/tours">Tours</NavLink> 
                </li>
                </ul>

                        {/* search bar right align */}
                        <div className="search">
                        <form action="#">
                        <input type="text" placeholder=" Search tours" name="search" />
                        <button>
                                <i className="fa fa-search" style={{fontSize: "18px", color:"white"}}>
                                </i>
                        </button>
                        </form>
                </div>
                <div>
                        <ul className="register">
                        <li className="account">
                                <NavLink to="/login">Login</NavLink>
                        </li>            
                        <li className="account">
                                <NavLink to="/signup">Sign up</NavLink>
                        </li> 
                        </ul>  
                </div>
        </div> 
        
    );
}