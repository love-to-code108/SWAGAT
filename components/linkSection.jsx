import "../src/index.css"
import "./styles/linksSection.css"

// IMPORTING IMAGES
import swagatLogoSmall from "../src/assets/svg/swagatSmallLogo.svg"

export const LinksSection = () => {

    return (
        <div id="LinksSection">

            {/* THE SMALL SWAGAT LOGO GOES IN THIS NAB BAR */}
            <div className="swagatNavBar">
                <img src={swagatLogoSmall} alt="" />
            </div>

            {/* SOME IMPORTANT LINKS WRITING GOES HERE */}
            <div className=" px-8 py-8">
                <p className="font-netflix text-3xl text-white">Some Important Links</p>
            </div>
        </div>
    );
}