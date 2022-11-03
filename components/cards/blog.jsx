function BlogCard({ title, time, author, date, image, category }) {
  return (
    <div className="group md:w-full md:min-w-lg  min-w-1/2 max-w-[380px] cursor-pointer">
      <img src={image} alt="" />
      <div className="my-3">
        <span className="my-2  text-xs group-hover:text-primary transition-all uppercase font-MontBold">
          {category}
        </span>
        <div className="gap-4 my-3 flex items-center">
          <span className="text-sm  hidden md:block flex-1 truncate text-gray-500">
            {author}
          </span>
          <div className="w-2 h-2 hidden md:block rounded-full bg-yellow-500 mx-1" />
          <span className="text-sm text-gray-500">{date}</span>
          <div className="w-2 h-2 rounded-full bg-yellow-500 mx-1" />
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <h4 className="text-xl leading-8 transition-all group-hover:text-primary font-MontBold">
          {title}
        </h4>
      </div>
    </div>
  );
}

export default BlogCard;
