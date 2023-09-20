import "../../src/index.css"
import "../styles/twentyFirstSeptember.css"

// import smallSwagatLogo from "../../src/assets/svg/s.svg"

const RulesAndRegulations = () => {


    return (
        <div id="EventBox" className="flex flex-col justify-center items-center">



            {/* div containing the S of swagat */}
            {/* <div className="
             smallLogoOfSwagat
            ">
                <img src={smallSwagatLogo} alt="" />
            </div> */}




            {/* div containing the number of the event */}
            {/* <div id="eventNumber" className="
            flex justify-center items-center
            "> */}
            {/* the number will go here */}
            {/* <p className="
                font-netflix text-white font-black text-4xl
                ">2</p>
            </div> */}






            {/* div containing the heading */}
            <div className="
             mb-4
            ">
                <p className="
                 text-white font-netflix2 text-4xl
                ">RULES <span className="text-[#fa0005]">AND</span>  REGULATIONS</p>
            </div>




            {/* div containing the paragraph */}
            <div className="mb-12">
                <p className="
                 text-white font-netflix paragraphInEventBox
                ">The spirit of unity and cooperation shines as every participant willingly adheres to the event's guidelines, creating a safe and enjoyable environment for all.For more details about rules and regulations please tap the download button.</p>
            </div>




            {/* THE DOWNLOAD BUTTON GOES HERE */}
            <div id="RulesAndRegulationDownloadButton" className="font-netflix2 text-3xl text-[#fa0005] ">

                <a className="
                     bg-white pt-1 px-2
                    "
                    href="https://drive.google.com/file/d/1aUbzn6hhteTBldkDbubEkBflJkexr5UF/view" >DOWNLOAD</a>
            </div>


            {/* mr and mrs freshers tag */}
            {/* <div id="mrAndMrsFrehersTag">
                <p className="
                font-netflix2 text-white text-xl
                ">mr and mrs freshers</p>
            </div> */}

        </div>
    )
}

export default RulesAndRegulations