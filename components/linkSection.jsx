import "../src/index.css"
import "./styles/linksSection.css"


// IMPORTING IMAGES
// import swagatLogoSmall from "../src/assets/svg/swagatSmallLogo.svg"
import SofSwagat from "../src/assets/svg/s.svg"
import GeeksForGeeksLogo from "../src/assets/svg/geeksForGeeksLogo.svg"
import oneMillionLogo from "../src/assets/png/oneMilionLogo.png"

export const LinksSection = () => {

    return (
        <div id="LinksSection">




            {/* SOME IMPORTANT LINKS WRITING GOES HERE */}
            <div className=" px-8 py-8">
                {/* <p className="font-netflix text-3xl text-white">Some Important Links</p> */}
            </div>


            {/* THE HORIZONTALLY SCROLLABLE LINKS */}

            <div id="WrapperForScrollableElements" className=" ml-8" >





                {/* JOIN INSTAGRAM SECTION*/}
                <div className="scrollableElementsLinksSection mr-2"
                    onClick={
                        () => {
                            window.open("https://www.instagram.com/freshers.uemj/",
                                "_blank")
                        }
                    }>


                    <div className="smallSwagatSLogo"><img src={SofSwagat} alt="" /></div>


                    <div className="theWritingSectionInTheCards relative">
                        <div className="font-netflix2 joinLinksSection2">FOLLOW US ON</div>
                        <div className="font-lucifer
                        groupLinksSectionWhatsapp2" >INSTAGRAM</div>

                    </div>


                </div>




                {/* JOIN WHATSAPP SECTION  */}
                <div className="scrollableElementsLinksSection mr-16"
                    onClick={
                        () => {
                            window.open("https://chat.whatsapp.com/BqCxrCjfTXM4sUS5wc4qaf",
                                "_blank")
                        }
                    }>


                    <div className="smallSwagatSLogo"><img src={SofSwagat} alt="" /></div>


                    <div className="theWritingSectionInTheCards relative">
                        <div className="font-netflix2 joinLinksSection">JOIN</div>
                        <div className="font-wednesday
                    groupLinksSectionWhatsapp" >WHATSAPP</div>
                        <div className="font-netflix2 groupLinksSection">GROUP</div>
                    </div>


                </div>







                {/* JOIN LINKEDIN SECTION */}
                {/* <div className="scrollableElementsLinksSection mr-16">

                </div> */}

            </div>









            {/* FOR NOW THE DOWNLOAD PDF SECTION GOES HERE */}
            <div className=" px-8 py-8">
                {/* <p className="font-netflix text-3xl text-white">For More Info</p> */}
            </div>


            {/* THE HORIZONTALLY SCROLLABLE LINKS */}

            <div id="WrapperForScrollableElements" className=" ml-8">


                {/* PARTICIPATE SECTION  */}
                <div className="scrollableElementsLinksSection2 mr-2 cursor-pointer"
                    onClick={
                        () => {
                            window.open("https://forms.gle/jq7pNV9TDppB9Y8HA",
                                "_blank")
                        }
                    }>


                    <div className="smallSwagatSLogo3"><img src={SofSwagat} alt="" /></div>


                    <div className="theWritingSectionInTheCards4 relative">

                        <p className="font-netflix2 text-4xl text-[#E50914]  drop-shadow-lg mt-4">PERFORM</p>
                        <p className="font-netflix2 text-2xl text-white relative bottom-2">ON 22ND SEPT</p>
                    </div>


                </div>



                {/* DOWNLOAD PDF SECTION  */}
                <div className="scrollableElementsLinksSection2 mr-12 cursor-pointer"
                    onClick={
                        () => {
                            window.open("https://drive.google.com/file/d/12zqF5QZGGrE5PIQumDvwJVS7TgZhCGJP/view?usp=sharing",
                                "_blank")
                        }
                    }>


                    <div className="smallSwagatSLogo3"><img src={SofSwagat} alt="" /></div>


                    <div className="theWritingSectionInTheCards3 relative">
                        <p className="font-netflix2 text-4xl text-white ">OUTFIT </p>


                        <p className="font-netflix2 text-4xl text-[#E50914] ml-2"> INSPO</p>

                    </div>


                </div>
            </div>









            {/* FOR NOW THE SPONSOR SECTION GOES HERE */}
            <div className=" px-8 py-8">
                {/* <p className="font-netflix text-3xl text-white">Sponsors</p> */}
            </div>


            {/* THE HORIZONTALLY SCROLLABLE LINKS */}

            <div id="WrapperForScrollableElements" className=" ml-8">

















                {/* 1 MILLION SECTION  */}
                <div className="scrollableElementsLinksSection5 mr-2"
                    >


                    <div className="smallSwagatSLogo"><img src={SofSwagat} alt="" /></div>


                    <div className="theWritingSectionInTheCards2 relative">
                        <img src={oneMillionLogo} alt="" />
                        
                    </div>


                </div>

                

















                {/* GEEKS FOR GEEKS SECTION  */}
                <div className="scrollableElementsLinksSection2 mr-2"
                    onClick={
                        () => {
                            window.open("https://www.geeksforgeeks.org/",
                                "_blank")
                        }
                    }>


                    <div className="smallSwagatSLogo"><img src={SofSwagat} alt="" /></div>


                    <div className="theWritingSectionInTheCards2 relative">
                        <img src={GeeksForGeeksLogo} alt="" />
                        <p className="font-poppins font-black text-2xl GeeksForGeeks">Geeks For Geeks</p>
                    </div>


                </div>

















                {/* MORE SPONSORS COMMING SOON */}
                <div className="scrollableElementsLinksSection mr-16"
                    
                    >


                    <div className="smallSwagatSLogo"><img src={SofSwagat} alt="" /></div>


                    <div className="theWritingSectionInTheCards relative">
                        <div className="font-netflix2 text-3xl">
                            <p className="relative top-2">New <span className="text-[#e00813] text-4xl">SPONSORS</span> </p>
                            <p ><span className="text-[#e00813] text-4xl">COMING</span> SOON</p>
                        </div>
                    </div>


                </div>
            </div>









        </div>

    );
}