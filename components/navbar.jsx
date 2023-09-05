import "../src/index.css"
import "./styles/linksSection.css"

import swagatLogoSmall from "../src/assets/svg/swagatSmallLogo.svg"

export const Navbaar = () => {


    return (

        
        <div>
             {/* THE SMALL SWAGAT LOGO GOES IN THIS NAB BAR */}
             <div className="swagatNavBar">
                <img src={swagatLogoSmall} alt="" />
            </div>
        </div>
    );

}