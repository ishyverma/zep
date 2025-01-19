import { AccordionMenu } from "./AccordionMenu";
import { Button } from "./Button";
import { RightArrow } from "./RightArrow";

export function Hero() {
    return <div className="flex justify-center items-center h-[80vh] mt-36">
        <div className="w-[90vw]">
            <div className="sm:flex justify-between items-center gap-4">
                <div>
                    <div className="flex text-4xl mt-60 sm:mt-0 md:text-5xl lg:text-6xl justify-center sm:justify-normal font-bold">
                        <span className="text-white">Your <span className="pl-2 text-[#CAD8FF]">Virtual HQ</span></span>
                    </div>
                    <div className="lg:text-xl text-base flex justify-center sm:justify-normal text-white mt-6 sm:w-[500px] md:w-[250px] lg:w-[500px]">
                        <span className="text-center sm:text-left">Gather brings the best of in-person collaboration to distributed teams.</span>
                    </div>
                    <div className="mt-6 w-96 flex gap-4 sm:justify-normal justify-self-center sm:justify-self-start justify-center">
                        <div>
                            <Button variant="primary" label="Get started" isHover={true} />
                        </div>
                        <div className="flex gap-2 text-[14px] items-center justify-center font-semibold text-white">
                            <div>
                                <button>Or take a tour</button>
                            </div>
                            <div>
                                <RightArrow />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 sm:mt-0 shadow-2xl rounded-3xl mb-72 sm:mb-0">
                    <video autoPlay muted loop playsInline className="w-[650px] rounded-3xl" src="https://cdn.vidzflow.com/v/h3yy6rTnJQ_720p_1691443174.mp4"></video>
                </div>
            </div>
        </div>
    </div>
}