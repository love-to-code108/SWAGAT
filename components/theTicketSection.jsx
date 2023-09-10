

import "../src/index.css"
import "./styles/theTicketSection.css"

import ticket from "../src/assets/jpg/invite.jpg"




export const TheTicketSection = () => {


    return (
        <div id="TheTicketSectionDiv">
            <div className="ticketImageTrim">
                <img className=" " src={ticket} alt="" />
            </div>
        </div>
    );
}

