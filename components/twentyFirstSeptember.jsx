import "../src/index.css"
import EventBox from "./childComponents/eventBox"
import EventBox2 from "./childComponents/eventBox2"
import EventBox3 from "./childComponents/eventBox3"
import RulesAndRegulations from "./childComponents/rulesAndRegulations"
import "./styles/twentyFirstSeptember.css"

const TwentyFirstSeptemberEventsAndRules = () => {
    return (
        <div id="TwentyFirstSeptemberEventsAndRules">







            {/* 21st September */}
            {/* Swagat ki shurwat */}
            <div className="w-[100%] bg-black flex flex-col justify-center items-start mb-12
            ">


                {/* 21st september */}
                <p className="
                 font-netflix text-xl font-black relative top-2 text-[#FF0000]"
                >21st
                    <span
                        className="
                    font-netflix2 text-2xl font-normal text-white
                    "
                    > SEPTEMBER</span>
                </p>



                {/* swagat ki shurwat */}

                <div className="w-[100%] bg-black flex justify-start">
                    <p
                        className="
                        font-netflix2 font-normal text-5xl text-white
                        "
                    >SWAGAT KI
                        <span className="
                         text-[#FF0000]"> SHURWAT</span></p>
                </div>


            </div>











            {/* events */}

            <div className="w-[100%] bg-black flex justify-start mb-12">

                <p className=" font-netflix2 bg-white text-[#FF0000] text-4xl pt-1 px-2
                ">EVENTS</p>

            </div>








            {/* first box for treasure hunt */}
            <div>
                <EventBox />
            </div>


            {/* Second box for UEM GOT TALENT */}
            <div>
                <EventBox2 />
            </div>

            {/* Third box for Rab ne banadi jodi */}
            <div>
                <EventBox3 />
            </div>








            {/* want to mr and mrs freshers */}
            <div className="text-white font-netflix2 mb-12">

                <div className="text-4xl mb-4">

                    <p>WANT TO <span className="
                    text-[#fa0005]">BE</span></p>

                    <p>MR OR MRS FRESHERS <span className="
                    text-[#fa0005]">?</span></p>

                </div>


                {/* register button */}
                <div className="text-3xl text-[#fa0005]">

                    <a className="
                     bg-white pt-1 px-2
                    "
                        href="">REGISTER</a>
                </div>


            </div>






            {/* rules and regulations box */}
            <RulesAndRegulations/>



        </div>
    )
}

export default TwentyFirstSeptemberEventsAndRules