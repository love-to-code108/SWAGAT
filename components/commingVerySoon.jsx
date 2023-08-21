import "../src/index.css"


export const CommingSoon = () => {



    return (
        <div id="ComingSoon" className="
        flex flex-col justify-center items-center">


            <div id="Somethings">
                <p id="SomethingsPara" className="
            text-white text-6xl font-netflix2
            md:text-8xl">SOMETHING'S</p>
            </div>


            <div id="comingSoon">
                <p id="comingSoonPara" className="
            text-[#E50914] text-4xl md:text-6xl font-netflix2
            bg-white pt-1 px-2">COMING VERY SOON</p>

            </div>


            <br />
            <br />
            <br />

            <p className="text-white fixed ready font-netflix
            lg:text-2xl">I HOPE YOU ARE <span className=" text-[#E50914] ">READY</span> FOR IT</p>

        </div>
    );
}