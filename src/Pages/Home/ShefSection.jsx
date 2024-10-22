import SectionTitle from "../../Components/SectionTitle";
import Menu from '../../assets/menu.json';

const ShefPage = () => {
    return (
        <div className="mb-20">
            {/* Section Title */}
            <div>
                <SectionTitle subtitle="---Should Try---" title="CHEF RECOMMENDS" />
            </div>

            {/* Card Section */}
            <div className="flex flex-col sm:flex-row justify-center gap-10">
                {Menu.slice(0, 3).map((card, index) => (
                    <div key={index} className="card w-full max-w-[350px] h-[541px] bg-[#F3F3F3] mx-auto">
                        <div>
                            <img src={card.image} className="w-full h-[300px] object-cover" alt={card.title} />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-black font-semibold text-2xl">{card.title}</h2>
                            <p className="text-black font-normal text-base">{card.description}</p>
                            <div className="card-actions">
                                <button className="btn bg-[#E8E8E8] border-none border-b-2 border-[#BB8506] text-xl text-[#BB8506]">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShefPage;
