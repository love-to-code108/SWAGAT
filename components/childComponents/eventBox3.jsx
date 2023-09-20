import "../../src/index.css"
import "../styles/twentyFirstSeptember.css"

import smallSwagatLogo from "../../src/assets/svg/s.svg"

const EventBox3 = () => {


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
                ">3</p>
            </div>






            {/* div containing the heading */}
            <div className="
             mb-4
            ">
                <p className="
                 text-white font-wednesday text-4xl
                ">Treasure Hunt</p>
            </div>




            {/* div containing the paragraph */}
            <div>
                <p className="
                 text-white font-netflix paragraphInEventBox2
                ">"Get ready for the thrill of UEM's Treasure Hunt! Form a 5-8 member team, including a Talent Round participant. Follow clues, stay together, and solve the ultimate mystery. Points are evenly split among all team members, and top 5 teams advance to the Ramp Walk Round!"</p>
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

export default EventBox3