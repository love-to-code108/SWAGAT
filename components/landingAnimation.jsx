import "../src/index.css"

// IMPORTING ASSETS BELOW
import landingVideo from "../src/assets/videos/Netflix New Logo Animation 2019.mp4"

import { useEffect } from "react"

export const LandingAnimation = () => {



    useEffect(() => {

        // const landingAnimationAudio = ;

        const hello = () => {

            document.getElementById("landingAnimationVideo").play()
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