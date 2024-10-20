import Img5 from "../../assets/Home/chef-service.jpg";

const BistroBoss = () => {
    return (
        <div 
            className="w-full max-w-[1300px] h-[400px] md:max-w-[1320px] mx-auto mt-20 relative mb-20 bg-fixed overflow-y-scroll" 
            style={{ backgroundImage: `url(${Img5})`, backgroundRepeat: 'no-repeat' }} 
            aria-label="Product 5">
            <div className="w-[90%] md:w-[1096px] h-[300px] bg-black mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center z-40 opacity-90 justify-center">
                <div className="w-[90%] md:w-[740px] text-center">
                    <h3 className="text-4xl font-normal text-white">Bistro Boss</h3>
                    <p className="text-white mt-4 font-enter">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                        libero accusamus laborum deserunt ratione dolor officiis praesentium!
                        Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
                        quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;



