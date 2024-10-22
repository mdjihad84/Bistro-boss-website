import Images1 from "../../assets/Home/Group.png";

const Testimonials = () => {
    return (
        <div className="py-10">
            <div>
                <p className="text-center text-xl font-normal italic text-[#D99904] mt-20">---What Our Clients Say---</p>
                <hr className="w-[424px] h-[4px] mx-auto mt-8 mb-4 bg-[#E8E8E8]" />
                <h2 className="text-center text-4xl font-semibold text-black">TESTIMONIALS</h2>
                <hr className="w-[424px] h-[4px] mx-auto mt-10 mb-8 bg-[#E8E8E8]" />
            </div>
            <div className="flex justify-center space-x-1 text-[#e77c40] mb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
            </div>
            <div className="mt-2">
                <img src={Images1} className="mx-auto max-w-[400px] md:max-w-[600px]" alt="Group-img" />
                <p className="mx-auto w-full max-w-[920px] text-center mt-4 px-4">
                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <h3 className="text-center text-[#CD9003] text-3xl mt-4">JANE DOE</h3>
            </div>
        </div>
    );
};
export default Testimonials;

