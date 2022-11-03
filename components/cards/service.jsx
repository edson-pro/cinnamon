function ServiceCard({ image, description, title }) {
  return (
    <div>
      <img className="h-12 w-12" src={image} alt="" />
      <div className="mt-4">
        <h4 className="text-white text-lg font-MontBold">{title}</h4>
        <p className="text-white max-w-xs text-opacity-80 text-base leading-7 my-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
