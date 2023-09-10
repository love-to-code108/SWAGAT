

import "../src/index.css"
import "./styles/linksSection.css"
import "./styles/theTicketSection.css"

import {ticket} from "../src/assets/png/invit.png"




export const TheTicketSection = () => {


    return(
        <div id="TheTicketSectionDiv">
                <div>
                    <img src={ticket} alt="" />
                </div>
        </div>
    );
}

