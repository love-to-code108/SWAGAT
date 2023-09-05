import "../src/index.css"
import "./styles/linksSection.css"

// IMPORTING IMAGES
import swagatLogoSmall from "../src/assets/svg/swagatSmallLogo.svg"
import SofSwagat from "../src/assets/svg/s.svg"
import GeeksForGeeksLogo from "../src/assets/svg/geeksForGeeksLogo.svg"

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
                        <div className="font-netflix2 joinLinksSection2">FOLLOW US ON</div>
                        <div className="font-lucifer
                        groupLinksSectionWhatsapp2" >INSTAGRAM</div>

                    </div>


                </div>



                {/* JOIN LINKEDIN SECTION */}
                <div className="scrollableElementsLinksSection mr-16">

                </div>

            </div>









            {/* FOR NOW THE SPONSOR SECTION GOES HERE */}
            <div className=" px-8 py-8">
                <p className="font-netflix text-3xl text-white">Sponsors</p>
            </div>


            {/* THE HORIZONTALLY SCROLLABLE LINKS */}

            <div id="WrapperForScrollableElements" className=" ml-8">



                {/* GEEKS FOR GEEKS SECTION  */}
                <div className="scrollableElementsLinksSection2 mr-2">


                    <div className="smallSwagatSLogo"><img src={SofSwagat} alt="" /></div>


                    <div className="theWritingSectionInTheCards2 relative">
                        <img src={GeeksForGeeksLogo} alt="" />
                        <p className="font-poppins font-black text-2xl GeeksForGeeks">Geeks For Geeks</p>
                    </div>


                </div>
            </div>





            {/* FOR NOW THE SPONSOR SECTION GOES HERE */}
            <div className=" px-8 py-8">
                <p className="font-netflix text-3xl text-white">For More Info</p>
            </div>


            {/* THE HORIZONTALLY SCROLLABLE LINKS */}

            <div id="WrapperForScrollableElements" className=" ml-8">



                {/* GEEKS FOR GEEKS SECTION  */}
                <div className="scrollableElementsLinksSection2 mr-2">


                    <div className="smallSwagatSLogo3"><img src={SofSwagat} alt="" /></div>


                    <div className="theWritingSectionInTheCards3 relative">
                        <p className="font-netflix2 text-4xl text-white  drop-shadow-lg">DOWNLOAD</p>
                        <p className="font-netflix2 text-4xl text-[#FF0000] drop-shadow-lg">PDF</p>
                    </div>


                </div>
            </div>



        </div>

    );
}