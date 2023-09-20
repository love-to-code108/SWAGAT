import "../../src/index.css"
import "../styles/twentyFirstSeptember.css"

import smallSwagatLogo from "../../src/assets/svg/s.svg"

const EventBox = () => {


    return (
        <div id="EventBox" className="flex flex-col justify-center items-center">



            {/* div containing the S of swagat */}
            <div className="
             smallLogoOfSwagat2
            ">
                <img src={smallSwagatLogo} alt="" />
            </div>




            {/* div containing the number of the event */}
            <div id="eventNumber" className="
            flex justify-center items-center
            ">
                {/* the number will go here */}
                <p className="
                font-netflix text-white font-black text-4xl
                ">1</p>
            </div>






            {/* div containing the heading */}
            <div className="
             mb-4 flex items-center
            ">
                <p className="
                 text-white font-squidGames text-4xl
                ">UEM'S GOT TALENT</p>
            </div>




            {/* div containing the paragraph */}
            <div>
                <p className="
                 text-white font-netflix paragraphInEventBox mb-2
                ">"Join UEM's Got Talent: solo, duo, or group acts, any talent welcome. Cheers in decibels decide winners. Talent Round points (swags) count for total score, unless you're in multiple rounds. Shine in the Treasure Hunt Round!"</p>
            </div>




            {/* mr and mrs freshers tag */}
            <div id="mrAndMrsFrehersTag">
                <p className="
                font-netflix2 text-white text-xl
                ">mr and mrs freshers</p>
            </div>

        </div>
    )
}

export default EventBox