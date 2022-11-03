import MapPin from "../icons/MapPin";

function OfficeCard({ image, title, description }) {
  return (
    <div className="group md:min-w-[544px] min-w-[320px] cursor-pointer">
      <img src={image} alt="" />
      <div className="flex md:items-center gap-4">
        <MapPin />

        <div className=" cursor-pointer my-5">
          <h4 className="group-hover:text-primary my-2 font-MontBold text-lg">
            {title}
          </h4>
          <p className="group-hover:text-primary text-gray-600 ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfficeCard;
