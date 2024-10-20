import Images1 from "../../assets/Home/featured.jpg";

const Featured = () => {
    return (
        <div>
            <div className="mx-auto mt-20 relative mb-20">
                <img src={Images1} className="w-full" alt="Latest News"/>
                <div className="">
                    <div className="absolute mx-auto ml-[36%] mt-[-65%]">
                        <p className="text-center text-xl font-normal italic text-[#D99904] mt-20">---Should Try---</p>
                        <hr className="w-[80%] sm:w-[360px] md:w-[424px] h-[4px] mx-auto mt-8 mb-4 bg-[#E8E8E8]" />
                        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl text-black">CHEF RECOMMENDS</h2>
                        <hr className="w-[80%] sm:w-[360px] md:w-[424px] h-[4px] mt-10 mb-8 bg-[#E8E8E8]" />
                    </div>
                    <div className="w-full max-w-[1096px] h-[300px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center justify-center">
                        <div className="w-full md:w-[648px] h-[300px]">
                            <img src={Images1} alt="Bistro Boss" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full md:w-[740px] mt-4 md:mt-0 md:ml-6 px-2 sm:px-4">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white">Bistro Boss</h3>
                            <p className="text-white font-normal text-xs sm:text-sm md:text-base lg:text-2xl mt-2 sm:mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                                accusamus laborum deserunt ratione dolor officiis praesentium!
                                Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
                                quibusdam nemo.
                            </p>
                            <button className="btn mt-3 sm:mt-4 border-none bg-transparent text-xs sm:text-sm md:text-base lg:text-xl text-white border border-2 border-solid">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Featured;
