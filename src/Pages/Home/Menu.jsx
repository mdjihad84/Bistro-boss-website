import SectionTitle from "../../Components/SectionTitle";
import menuData from '../../assets/menu.json';

const Menu = () => {
    return (
        <div className="px-4 sm:px-0">
            <div>
                <SectionTitle subtitle="---Check it out---" title="FROM OUR MENU" />
            </div>
            <div className="flex justify-evenly lg:flex-row flex-wrap">
                {menuData.slice(4, 10).map((item) => (
                <div key={item.id} className="w-full sm:w-[525px] mx-4 lg:ml-10 mb-8 flex">
                    <div className="flex-shrink-0 bg-[#D9D9D9] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] w-[90px] h-[80px] sm:w-[118px] sm:h-[104px] mr-4 sm:mr-6"></div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <h4 className="text-[#737373] text-lg sm:text-xl mt-2 sm:mt-4">{item.name}</h4>
                                <p className="text-[#BB8506] text-lg sm:text-xl">{item.price}</p>
                            </div>
                            <p className="text-[#737373] text-sm sm:text-base mt-1 sm:mt-2">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center my-4">
                <button className="py-[20px] px-[30px] rounded-[8px] border-b-[3px] border-black">
                    View Full Menu
                </button>
            </div>
        </div>
    );
};
export default Menu;
