import "../components/Navbar.css";
import logo from "../assets/Qtify_Logo.png";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return(
        <>
            <nav className="nav_main">
                <img src={logo} alt="logo"/>
                <div class="search-container">
                    <input type="text" placeholder="Search a song of your choice" name="search" size="60"/>
                    <button type="submit"><FaSearch /></button>
                    <button className="fd_btn">Give Feedback</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
