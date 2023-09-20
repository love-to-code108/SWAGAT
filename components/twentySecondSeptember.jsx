import "../src/index.css"
import "./styles/twentyFirstSeptember.css"

import oneMillionLogo from "../src/assets/png/oneMilionLogo.png"

const TwentySecondSeptember = () => {
  return (
    <div id="TwentySecondSeptember">
        





        {/* 22nd september */}
        <div className="twentySecondSeptember">
            

            <div>
                <p className="
                text-[#fa0005] text-8xl font-netflix2
                ">22 <span className="
                text-white text-6xl
                ">SEPTEMBER</span></p>
            </div>
        </div>





        {/* 1 million logo + presents */}
        <div className="bg-black text-white flex justify-end">


            <div className="font-netflix2 text-2xl oneMillionLogoEdit">


                <img src={oneMillionLogo} alt="" />
                <p className="ml-2 relative bottom-1">PRESENTS</p>

            </div>

        </div>





        {/* the big swagat */}
        <div className="bg-black text-[#fa0005] text-9xl font-netflix2 flex justify-center">
            <p>SWAGAT</p>
        </div>






        {/* 2k23 and meet you at */}
        <div className=" bg-black flex font-netflix2 text-white text-3xl relative">


            <div>
                <p> <span className="text-[#fa0005] ml-2">MEET</span> YOU AT</p>
            </div>


            <div className="absolute right-5 bg-[#fa0005] pt-1 px-2 bottom-0">
                <p>2K23</p>
            </div>

        </div>





        {/* 2:00 pm  */}
        <div className="bg-black text-[#fa0005] font-netflix2 mt-4">

            <p className="text-7xl">2<span className="text-white">:00</span><span className=" text-2xl">pm</span></p>
        </div>




        {/* events */}
        <div className="bg-black text-[#fa0005] font-netflix2 text-4xl flex justify-center my-4">
            <div className="bg-white pt-1 px-2">
                <p>EVENTS</p>
            </div>
        </div>


        {/* listing all the events */}
        <div className="ml-4 mt-8">
            <ul className=" list-disc text-[#fa0005] font-netflix2 text-3xl">
                <li className="text-white"> Welcome Fresher's</li>
                <li className="text-white"> Opening Ceremony</li>
                <li className="text-white"> Cultural Performances</li>
                <li className="text-white"> Ramp Walk</li>
                <li className="text-white"> DJ</li>
                <li className="text-white"> Closing Ceremony</li>
            </ul>
        </div>


    </div>
  )
}

export default TwentySecondSeptember