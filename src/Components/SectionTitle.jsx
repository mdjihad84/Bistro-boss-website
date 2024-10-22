
const CategoryTitle = ({ subtitle, title }) => {
  return (
    <div className="lg:w-full md:w-3/12 my-8 mx-auto ab">
      <p className="text-center mb-2 text-[#D99904]  md:text-xl font-bold">
        ---{subtitle}---
      </p>
      <h2 className="text-center uppercase md:text-2xl border-y-2 py-4 lg:text-4xl text-black">
        {title}
      </h2>
    </div>
  );
};

export default CategoryTitle;
