
const FeaturedSection = ({ imageSrc, subtitle, title, description, buttonText }) => {
    return (
        <div className="">
            <div className="absolute mx-auto ml-[36%] mt-[-65%]">
                <p className="text-center text-xl font-normal italic text-[#D99904] mt-20">{subtitle}</p>
                <hr className="w-[80%] sm:w-[360px] md:w-[424px] h-[4px] mx-auto mt-8 mb-4 bg-[#E8E8E8]" />
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl text-black">{title}</h2>
                <hr className="w-[80%] sm:w-[360px] md:w-[424px] h-[4px] mt-10 mb-8 bg-[#E8E8E8]" />
            </div>
            <div className="w-full max-w-[1096px] h-[300px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-[648px] h-[300px]">
                    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-[740px] mt-4 md:mt-0 md:ml-6 px-2 sm:px-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white">{title}</h3>
                    <p className="text-white font-normal text-xs sm:text-sm md:text-base lg:text-2xl mt-2 sm:mt-4">
                        {description}
                    </p>
                    <button className="btn mt-3 sm:mt-4 border-none bg-transparent text-xs sm:text-sm md:text-base lg:text-xl text-white border border-2 border-solid">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default FeaturedSection;

