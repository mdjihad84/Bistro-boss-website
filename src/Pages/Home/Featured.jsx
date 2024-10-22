
import Images1 from "../../assets/Home/featured.jpg";
import FeaturedSection from "../../Components/Featured";

const Featured = () => {
    return (
        <div className="mx-auto mt-20 relative mb-20">
            <img src={Images1} className="w-full" alt="Latest News" />
            <div>
                <FeaturedSection
                    imageSrc={Images1}
                    subtitle="---Should Try---"
                    title="CHEF RECOMMENDS"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
                    buttonText="Read More"/>
            </div>
        </div>
    );
};
export default Featured;

