function OfficeCard({ image, title, description }) {
  return (
    <div className="group md:min-w-[544px] min-w-[320px] cursor-pointer">
      <img src={image} alt="" />
      <div className="flex md:items-center gap-4">
        <svg
          className="stroke-current my-8 md:my-0 group-hover:text-primary"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="22"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
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
