import "../src/index.css"

// IMPORTING ASSETS BELOW
import landingVideo from "../src/assets/videos/Netflix New Logo Animation 2019.mp4"

import { useEffect } from "react"
import { gsap } from "gsap"

export const LandingAnimation = () => {

    
    const endStartingAnimation = () => {
        
        


        gsap.to("#LandingAnimation",{
            scale:2,
            duration:2,
            opacity:0,
        });


    }

    // THE USE EFFECT HOOK

    useEffect(() => {

        // const landingAnimationAudio = ;

        const hello = () => {

            document.getElementById("landingAnimationVideo").play()


            const timer = setTimeout(endStartingAnimation , 3000);

            timer()
        }
        window.addEventListener("click",hello)

    },[])



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