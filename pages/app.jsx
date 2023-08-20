// IMPORTING OTHER LIBRARIES BELOW
import { LandingPage } from "../components/LandingPage";
import { LandingAnimation } from "../components/landingAnimation";


// IMPORTING CSS BELOW
import "../src/index.css"



export const SinglePageApp = () =>{


    return(
        <div>
            <LandingAnimation/>
            <LandingPage/>
        </div>
    );
}