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
                 text-white font-netflix paragraphInEventBox
                ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio recusandae eius quia libero optio tempore, iste porro, qui accusantium voluptate sint veniam. Molestias praesentium in corrupti, ducimus quibusdam eveniet. Quia delectus quae maiores rerum, ratione officiis hic sapiente assumenda voluptates, vitae aut quas similique asperiores dolorem placeat! Rem, impedit error!</p>
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