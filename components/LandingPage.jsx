import "../src/index.css"
import "./styles/swagatLogoAnimation.css"
import "./styles/landingPageAnimations.css"


// ALL ASSETS BELOW HERE
// import swagatLogo from "../src/assets/svg/swagatLogo.svg"
import bottomIcon from "../src/assets/svg/white.svg"

// ALL LIBRARIES BELOW
import gsap from "gsap"


export const LandingPage = () => {

    let HamMenuCount = 0;

    const hamburgerMenu = () => {


        const hamburgerLine1 = document.getElementsByClassName("hamburgerLine1")[0];


        const hamburgerLine3 = document.getElementsByClassName("hamburgerLine3")[0];


        const hamburgerLine2 = document.getElementsByClassName("hamburgerLine2")[0];

        const MenuWrapper = document.getElementById("menuWriting");
        const hamBurgerMenu = document.getElementById("hamburgerMenuIcon");






        ++HamMenuCount;

        if (HamMenuCount % 2 != 0) {
            gsap.to("#HamburgerMenuAnimation", {
                x: -240,
                duration: 1,
                ease: "power4"

            })

            gsap.to(".hamLines", {
                backgroundColor: "black",
                duration: 0,
                ease: "power3"
            })

            gsap.to("#menuWriting", {
                color: "black",
                duration: 0,
                ease: "power3"
            })






            hamburgerLine1.classList.add("hamburgerLine1Anime");
            hamburgerLine2.classList.add("hamburgerLine2Anime");
            hamburgerLine3.classList.add("hamburgerLine3Anime");


            MenuWrapper.classList.add("menuWrapperAnime1");
            hamBurgerMenu.classList.add("menuWrapperAnime2");






        }
        else if (HamMenuCount % 2 == 0) {
            gsap.to("#HamburgerMenuAnimation", {
                x: 0,
                duration: 1,
                ease: "power4"

            })

            gsap.to(".hamLines", {
                backgroundColor: "white",
                duration: 0,
                ease: "power3"
            })

            gsap.to("#menuWriting", {
                color: "white",
                duration: 0,
                ease: "power3"
            })



            hamburgerLine1.classList.remove("hamburgerLine1Anime");
            hamburgerLine2.classList.remove("hamburgerLine2Anime");
            hamburgerLine3.classList.remove("hamburgerLine3Anime");


            MenuWrapper.classList.remove("menuWrapperAnime1");
            hamBurgerMenu.classList.remove("menuWrapperAnime2");
        }

    }





    return (
        <div id="LandingPage" className="flex flex-col justify-center items-center
        " >


            {/* THE MENU BUTTON */}
            <div id="Hamburgermenu" className="flex fixed
            " onClick={hamburgerMenu}>

                <div id="menuWrapper" className="flex">



                    <div id="hamburgerMenuIcon" className=" mr-2 fixed w-8 h-5">
                        <div className="hamburgerLine1 
                     bg-white w-6 hamLines"></div>
                        <div className="hamburgerLine2 
                     bg-white w-6 hamLines"></div>
                        <div className="hamburgerLine3 
                     bg-white w-6 hamLines"></div>
                    </div>


                    <p id="menuWriting" className="
                text-white font-netflix2 text-xl " >
                        MENU
                    </p>



                </div>





                <div id="HamburgerMenuAnimation">
                    <div className="flex flex-col text-3xl items-center ">
                        <a className="whatsapp" href="https://chat.whatsapp.com/BqCxrCjfTXM4sUS5wc4qaf" target="_blank" rel="noreferrer">Whatsapp</a>


                        <a className="linkedin" href="https://www.linkedin.com/in/love-to-code108/" target="_blank" rel="noreferrer">Linkedin</a>


                        <a className="instagram" href="https://www.instagram.com/freshers.uemj/" target="_blank" rel="noreferrer">Instagram</a>


                        <a className="Register" href="https://forms.gle/jq7pNV9TDppB9Y8HA" target="_blank" rel="noreferrer">Participate</a>


                    </div>

                </div>

            </div>



            {/* NOVATO FIESTA'S */}
            <div id="NovatoFiesta" className="flex justify-center items-center ">
                <p className="novatoFiestaBox
                font-netflix2 text-white border-2 text-2xl px-2 pt-1
                mb-4
                ">NOVATO FIESTA'S</p>
            </div>




            {/* SWAGAT LOGO*/}
            <div className="">
                <svg height="105" viewBox="0 0 395 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.7126 118.724C17.9184 118.724 11.2677 116.252 6.76063 111.31C2.25355 106.258 0 99.0639 0 89.7282V83.1384H17.1488V91.0463C17.1488 98.5148 20.2818 102.249 26.5477 102.249C29.6257 102.249 31.9343 101.37 33.4733 99.6132C35.1221 97.7461 35.9465 94.7806 35.9465 90.7168C35.9465 85.8843 34.8472 81.6558 32.6486 78.0313C30.45 74.2971 26.3826 69.8489 20.4466 64.6869C12.9714 58.097 7.7498 52.1661 4.78171 46.8942C1.81365 41.5125 0.329607 35.4718 0.329607 28.7721C0.329607 19.6561 2.63803 12.6269 7.25504 7.68453C11.872 2.63228 18.5777 0.106094 27.372 0.106094C36.0563 0.106094 42.5971 2.63228 46.9943 7.68453C51.5013 12.6269 53.7549 19.7659 53.7549 29.1015V33.8793H36.6061V27.9483C36.6061 23.9944 35.8366 21.1389 34.2977 19.3816C32.7588 17.5145 30.5052 16.5809 27.537 16.5809C21.491 16.5809 18.468 20.2602 18.468 27.6189C18.468 31.7925 19.5673 35.6915 21.7659 39.3159C24.0744 42.9403 28.1967 47.3335 34.1329 52.4956C41.7179 59.0855 46.9396 65.0713 49.7977 70.453C52.6558 75.8348 54.0849 82.1501 54.0849 89.3989C54.0849 98.8444 51.7214 106.093 46.9945 111.146C42.3775 116.198 35.6169 118.724 26.7126 118.724Z" className="_s" />
                    <path d="M65.8132 1.69646H81.0282L88.0615 78.8512H88.3486L95.8125 1.69646H113.037L120.501 78.8512H120.788L127.821 1.69646H141.458L131.266 102.084H111.602L104.425 34.394H104.138L96.9608 102.084H76.0043L65.8132 1.69646Z" className="_w" />
                    <path d="M245.525 97.3036C238.313 97.3036 232.813 95.277 229.027 91.2237C225.241 87.0805 223.347 81.1809 223.347 73.5249V23.8056C223.347 16.1496 225.241 10.2949 229.027 6.24176C232.813 2.09847 238.313 0.0267792 245.525 0.0267792C252.737 0.0267792 258.236 2.09847 262.022 6.24176C265.809 10.2949 267.702 16.1496 267.702 23.8056V31.912H253.638V22.8598C253.638 16.6449 251.069 13.5375 245.93 13.5375C240.792 13.5375 238.222 16.6449 238.222 22.8598V74.6057C238.222 80.7305 240.792 83.7929 245.93 83.7929C251.069 83.7929 253.638 80.7305 253.638 74.6057V56.096H246.201V42.5853H267.702V73.5249C267.702 81.1809 265.809 87.0805 262.022 91.2237C258.236 95.277 252.737 97.3036 245.525 97.3036Z" className="_g" />
                    <path d="M299.806 1.69919H321.344L337.824 102.798H321.923L319.031 82.7225V83.0126H300.962L298.071 102.799H283.326L299.806 1.69919ZM317.152 69.2909L310.069 19.3193H309.779L302.84 69.2909H317.152Z" className="_a2" />
                    <path d="M356.993 18.2281H338.03V1.75351H394.094V18.2281H375.131V117.076H356.993V18.2281Z" className="_t" />
                    <path d="M170.298 1.67184H190.322L205.642 95.6583H190.859L188.171 76.9953V77.2621H171.373L168.685 95.6567H154.978L170.298 1.67184ZM186.425 64.5086L179.84 18.0524H179.573L173.122 64.5086H186.425Z" className="_a" />
                </svg>

            </div>





            {/* 2K23 */}
            <div id="twoK23" className="
             bg-red-600 flex items-center justify-center">

                <p  className="TwoK23
                font-netflix2 text-white text-3xl px-1 pt-1">2K23</p>

            </div>



            {/* BOTTOM ICON */}
            <div className="bottomWhiteIcon">
                <img src={bottomIcon} alt="" />
            </div>

        </div>
    );
}