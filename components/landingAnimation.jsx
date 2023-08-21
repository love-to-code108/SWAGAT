import "../src/index.css"

// IMPORTING ASSETS BELOW
import landingVideo from "../src/assets/videos/Netflix New Logo Animation 2019.mp4"


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

        },3000);


        // GETTING THE ELEMENTS USING THEIR CLASS NAME
        const _s = document.getElementsByClassName("_s")[0];
        const _w = document.getElementsByClassName("_w")[0];
        const _a = document.getElementsByClassName("_a")[0];
        const _g = document.getElementsByClassName("_g")[0];
        const _a2 = document.getElementsByClassName("_a2")[0];
        const _t = document.getElementsByClassName("_t")[0];



        // CHANGING THE CSS THROUGH JAVASCRIPT
        _s.style.animationName = "_S";
        _w.style.animationName = "_W";
        _a.style.animationName = "_A";
        _g.style.animationName = "_G";
        _a2.style.animationName = "_A2";
        _t.style.animationName = "_T";
        


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


                document.getElementById("landingAnimationVideo").play()


                const timer = setTimeout(endStartingAnimation, 3000);

                timer()

            }

        }
        window.addEventListener("click", hello)

    }, [])



    return (
        <div id="LandingAnimation" className=" flex justify-center items-center">

            <div>



                <video id="landingAnimationVideo"
                    className="LandingAnimationSrc">
                    <source src={landingVideo} />
                </video>



            </div>

        </div>
    );
}