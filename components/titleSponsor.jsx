import "../src/index.css"
import oneMillionLogo from "../src/assets/png/oneMilionLogo.png"

// the css for title sponsor is in index.css


const TitleSponsor = () => {
  return (
    <div id="TitleSponsor" className="flex flex-col justify-center items-center  text-white relative">

            <div className="text-4xl font-netflix2 absolute top-8">
                <p>TITLE <span className="text-[#fa0005]">SPONSOR</span></p>
            </div>

            <div className="titleSponsorLogo">

                <img src={oneMillionLogo} alt="" />

            </div>
    </div>
  )
}

export default TitleSponsor