import "../src/index.css"
import "./styles/linksSection.css"

// IMPORTING IMAGES
import swagatLogoSmall from "../src/assets/svg/swagatSmallLogo.svg"
import SofSwagat from "../src/assets/svg/s.svg"

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


            {/* THE HORIZONTALLY SCROLLABLE LINKS */}

            <div id="WrapperForScrollableElements" className=" ml-8">



                {/* JOIN WHATSAPP SECTION  */}
                <div className="scrollableElementsLinksSection mr-2">


                    <div className="smallSwagatSLogo"><img src={SofSwagat} alt="" /></div>


                    <div className="theWritingSectionInTheCards relative">
                        <div className="font-netflix2 joinLinksSection">JOIN</div>
                        <div className="font-wednesday
                    groupLinksSectionWhatsapp" >WHATSAPP</div>
                        <div className="font-netflix2 groupLinksSection">GROUP</div>
                    </div>


                </div>



                {/* JOIN INSTAGRAM SECTION*/}
                <div className="scrollableElementsLinksSection mr-2">


                    <div className="smallSwagatSLogo"><img src={SofSwagat} alt="" /></div>


                    <div className="theWritingSectionInTheCards relative">
                        <div className="font-netflix2 joinLinksSection">JOIN</div>
                        <div className="font-wednesday
                        groupLinksSectionWhatsapp" >WHATSAPP</div>
                        <div className="font-netflix2 groupLinksSection">GROUP</div>
                    </div>


                </div>



                {/* JOIN LINKEDIN SECTION */}
                <div className="scrollableElementsLinksSection mr-2">

                </div>




            </div>


        </div>
    );
}