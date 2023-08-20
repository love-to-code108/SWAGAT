import "../src/index.css"

// IMPORTING ASSETS BELOW
import landingVideo from "../src/assets/videos/Netflix New Logo Animation 2019.mp4"
import landingAudio from "../src/assets/audio/Netflix New Logo Animation 2019.mp3"

export const LandingAnimation = () => {



    return (
        <div id="LandingAnimation" className=" flex justify-center items-center">

            <div>



                <audio autoPlay loop >
                    <source src={landingAudio} />
                </audio>


                <video autoPlay muted loop className="LandingAnimationSrc">
                    <source src={landingVideo} />
                </video>



            </div>

        </div>
    );
}