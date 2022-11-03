function ProductCard({ color, image, description, title, tags }) {
  return (
    <div className="lg:my-32 my-16">
      <div
        style={{ background: color }}
        className="bg-[#91F1C3] overflow-hidden group w-full"
      >
        <img
          src={image}
          className="group-hover:scale-105 transition-all duration-500"
          alt=""
        />
      </div>
      <div className="my-10">
        <div className="flex items-center my-3 text-gray-500 font-bold font-MontSemiBold text-sm gap-6">
          {tags.map((e, index) => {
            return <p key={index}>{e}</p>;
          })}
        </div>
        <h4
          className="text-4xl leading-3.125 font-MontBold "
          dangerouslySetInnerHTML={{ __html: title }}
        ></h4>
        <p className="text-base max-w-2xl leading-8 text-gray-500 my-4">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
