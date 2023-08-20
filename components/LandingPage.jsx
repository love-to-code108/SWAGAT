import "../src/index.css"


// ALL ASSETS BELOW HERE
import swagatLogo from "../src/assets/svg/g11267.svg"

export const LandingPage = () => {



    return (
        <div id="LandingPage" className="flex flex-col justify-center items-center">


            {/* THE MENU BUTTON */}
            <div id="Hamburgermenu" className="flex fixed">


                <div>
                    <div className="hamburgerLines 
                     bg-white w-8 h-1 mt-1"></div>
                    <div className="hamburgerLines 
                     bg-white w-8 h-1 mt-1"></div>
                    <div className="hamburgerLines 
                     bg-white w-8 h-1 mt-1"></div>
                </div>


                <p className="
                text-white font-netflix2 text-2xl" >
                    MENU
                </p>

            </div>



            {/* NOVATO FIESTA'S */}
            <div className="flex justify-center items-center ">
                <p className="
                font-netflix2 text-white border-2 text-2xl px-2 pt-1
                mb-4
                ">NOVATO FIESTA'S</p>
            </div>




            {/* SWAGAT */}
            <div>
                <img src={swagatLogo} alt="" />
            </div>





            {/* 2K23 */}
            <div className="
             bg-red-600 flex items-center justify-center">

                <p className="TwoK23
                font-netflix2 text-white text-3xl px-1 pt-1">2K23</p>

            </div>

        </div>
    );
}