// IMPORTING OTHER LIBRARIES BELOW
import { LandingPage } from "../components/LandingPage";
// import { CommingSoon } from "../components/commingVerySoon";
import { LandingAnimation } from "../components/landingAnimation";


// IMPORTING CSS BELOW
import "../src/index.css"

// IMPORTING REACT RELATED LIBRARIES BELOW
import { createContext, useState } from "react";


export const AppContext = createContext();


export const SinglePageApp = () => {

    // THE COMPONETS STATES ARE BEING CONTROLLED HERE
    const [landingAnimationState, setlandingAnimationState] = useState(true);


    return (
        <div>
            <AppContext.Provider value={{ setlandingAnimationState }} >
            {/* <CommingSoon/> */}
            {landingAnimationState && <LandingAnimation />}
            <LandingPage />
            </AppContext.Provider >
        </div>
    );
}