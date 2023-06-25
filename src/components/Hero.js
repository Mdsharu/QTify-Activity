import "../components/Hero.css";
import Logo from "../assets/Qtify_Logo.png";

function Hero() {
    return(
        <div className="Hero_Section">
            <div className="Hero_content">
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over Thousand Podcast episodes</h1>
            </div>
            <img className="Hero_img" src={Logo} alt="Logo"/>
        </div>
    )
}

export default Hero;
