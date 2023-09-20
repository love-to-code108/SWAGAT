import "../../src/index.css"
import "../styles/twentyFirstSeptember.css"

import smallSwagatLogo from "../../src/assets/svg/s.svg"

const EventBox2 = () => {


    return (
        <div id="EventBox" className="flex flex-col justify-center items-center">



            {/* div containing the S of swagat */}
            <div className="
             smallLogoOfSwagat
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
                ">2</p>
            </div>






            {/* div containing the heading */}
            <div className="
             mb-4
            ">
                <p className="
                 text-white font-grand text-4xl
                ">JORI No. 1</p>
            </div>




            {/* div containing the paragraph */}
            <div>
                <p className="
                 text-white font-netflix paragraphInEventBox mb-2
                ">"Get ready to pop, groove, and balance your way to victory! Join us at Couple Round – Where Kabab Mein Baloon , Nach Baliye , and Aakhri Padav  bring out the best in couples. Are you up for the challenge? Let the games begin!"</p>
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

export default EventBox2