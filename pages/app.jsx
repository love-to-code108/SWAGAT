// IMPORTING OTHER LIBRARIES BELOW
import { LandingPage } from "../components/LandingPage";
import { CommingSoon } from "../components/commingVerySoon";
import { LandingAnimation } from "../components/landingAnimation";


// IMPORTING CSS BELOW
import "../src/index.css"



export const SinglePageApp = () =>{


    return(
        <div>
            <CommingSoon/>
            {/* <LandingAnimation/> */}
            {/* <LandingPage/> */}
        </div>
    );
}