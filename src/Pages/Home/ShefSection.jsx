
import { cardData } from '../../Components/CardData';
const ShefPage = () => {
    return (
        <div className="mb-20">
            <div>
                <p className="text-center text-xl font-normal italic text-[#D99904] mt-20">---Should Try---</p>
                <hr className="w-[424px] h-[4px] mx-auto mt-8 mb-4 bg-[#E8E8E8]" />
                <h2 className="text-center text-4xl text-black">CHEF RECOMMENDS</h2>
                <hr className="w-[424px] h-[4px] mx-auto mt-10 mb-8 bg-[#E8E8E8]" />
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-10">
                {cardData.slice(0, 3).map((card, index) => (
                    <div key={index} className="card w-full max-w-[350px] h-[541px] bg-[#F3F3F3] mx-auto">
                        <div>
                            <img src={card.image} className="w-full h-[300px] object-cover" alt={card.title} />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-black font-semibold text-2xl">{card.title}</h2>
                            <p className="text-black font-normal text-base">{card.description}</p>
                            <div className="card-actions">
                                <button className={`btn bg-[${card.buttonBg}] border-none border-b-[3px] border-black text-xl text-[${card.buttonText}]`}>add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ShefPage;
