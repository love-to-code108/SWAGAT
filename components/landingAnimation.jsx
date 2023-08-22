import "../src/index.css"
import "./styles/beforeNetflixAnimation.css"

// IMPORTING ASSETS BELOW
import landingVideo from "../src/assets/videos/Netflix New Logo Animation 2019.mp4"
// import landingVideo2 from "../src/assets/videos/swagat.mp4"
import swagatLogo from "../src/assets/svg/swagatLogo.svg"
import polygon from "../src/assets/svg/Polygon.svg"
import rectangle from "../src/assets/svg/Rectangle.svg"
import ellipse from "../src/assets/svg/Ellipse.svg"
import sacredGames from "../src/assets/jpg/sacredGames.jpg"


// IMPORTING REACT AND OTHER LIBRARIES
import { useEffect } from "react"
import { gsap } from "gsap"
import { useContext } from "react"


// IMPORTING COMPONENTS FROM OTHER FILES BELOW
import { AppContext } from "../pages/app"




// THE COMPONENT STARTS BELOW HERE
export const LandingAnimation = () => {

    const { setlandingAnimationState } = useContext(AppContext);




    const endStartingAnimation = () => {



        gsap.to("#LandingAnimation", {

            duration: 3,
            opacity: 0,
        });



        setTimeout(() => {
            setlandingAnimationState(false);

        }, 3000);


        // GETTING THE ELEMENTS USING THEIR CLASS NAME
        const _s = document.getElementsByClassName("_s")[0];
        const _w = document.getElementsByClassName("_w")[0];
        const _a = document.getElementsByClassName("_a")[0];
        const _g = document.getElementsByClassName("_g")[0];
        const _a2 = document.getElementsByClassName("_a2")[0];
        const _t = document.getElementsByClassName("_t")[0];


        // const NovatoFiesta = document.getElementById("NovatoFiesta");
        // const twoK23 = document.getElementById("twoK23");




        // CHANGING THE CSS THROUGH JAVASCRIPT
        _s.style.animationName = "_S";
        _w.style.animationName = "_W";
        _a.style.animationName = "_A";
        _g.style.animationName = "_G";
        _a2.style.animationName = "_A2";
        _t.style.animationName = "_T";


        gsap.fromTo("#NovatoFiesta", {
            y: 10,
            opacity: 0,

        }, {
            y: 0,
            duration: 2,
            delay: 2,
            opacity: 1,
            ease: "power4"
        })


        gsap.fromTo("#twoK23", {
            y: -10,
            opacity: 0,

        }, {
            y: 0,
            duration: 2,
            delay: 2,
            opacity: 1,
            ease: "power4"
        })


        gsap.fromTo("#menuWrapper", {

            opacity: 0,
        }, {

            x: 0,
            duration: 2,
            delay: 2,
            opacity: 1,
            ease: "power4"
        })



        // _s.style.animationName = "ColorChanger";

    }





    // THE USE EFFECT HOOK

    useEffect(() => {


        let counter = 0;

        // const landingAnimationVideo 
        // BASICLLY THE CLICK EVENT LISTENER IS WORKING INSIDE THE USE EFFECT HOOK ;

        const hello = () => {
            if (counter == 0) {
                counter++;

                const beforeNetflixVideo = document.getElementById("beforeNetflixVideo");

                beforeNetflixVideo.style.opacity = 0;


                // PLAYING THE STARTING VIDEO
                document.getElementById("landingAnimationVideo").play();



                const timer = setTimeout(endStartingAnimation, 3000);

                timer()

            }

        }

        const ClickEvent = document.getElementById("ClickEvent")

        ClickEvent.addEventListener("click", hello)

    }, [])



    return (
        <div id="LandingAnimation" className=" flex justify-center items-center">




            <div id="beforeNetflixVideo"
                className="flex flex-col justify-center items-center">




                <div>
                    <img id="swagatLogo" className="w-16 absolute 
                    top-6 left-4" src={swagatLogo} alt="" />
                </div>


                <p className="whoIsWatching">Who is watching?</p>





                <div
                    className="FreshersWatching w-[14rem] h-[14rem] ">


                    <div id="ClickEvent" className=" freshersWatchingLogo flex justify-center items-center h-[14rem] w-[14rem]">
                        <img src={polygon} alt="" />
                        <img src={ellipse} alt="" />
                        <img className=" ml-2" src={rectangle} alt="" />
                    </div>


                    <p className="freshiSeniorF">Freshi</p>
                </div>



                {/* <div
                    className="FreshersWatching w-[14rem] h-[14rem] ">


                    <div className=" freshersWatchingLogo flex justify-center items-center h-[14rem] w-[14rem]">
                        <img className="SacredGames" src={sacredGames} alt="" />
                    </div>


                    <p className="freshiSeniorS">Senior</p>
                </div> */}





            </div>





            <div>



                <video id="landingAnimationVideo"
                    className="LandingAnimationSrc">
                    <source src={landingVideo} />
                </video>



            </div>

        </div>
    );
}