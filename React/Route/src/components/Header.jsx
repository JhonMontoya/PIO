import { Link } from "react-router-dom";

function Header(){
    return(
        <nav>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/about"> about </Link></li>
            <li><Link to='/products/1'> Product 1 </Link></li>
        </nav>
    );
};

export default Header;