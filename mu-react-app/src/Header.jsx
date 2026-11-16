import { useState } from "react";
import "./Header.css";
import bars from "/icons/bars-solid.png";

function Header(){
    const [active, setActive] = useState(false);

    return(
        <header id="continer" className={active ? "animated" : ""}>
            <img 
                src={bars} 
                id="img"
                onClick={() => setActive(!active)}
            />

            <ul>
                <li id="home"><a href="#">home</a></li>
                <li><a href="#">contact</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">projects</a></li>
            </ul>
        </header>
    );
}

export default Header;