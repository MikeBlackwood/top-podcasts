const PodcastCard = ({ link, thumbnail, title, production, rank }) => {
  return (
    <div
      className="px-2 py-2 mx-2.5 dark:bg-gray-800
    dark:border-gray-700 rounded-md text-white"
    >
      <div className="flex ">
        <div className=" flex-item flex-1">
          <div className="flex justify-center">
            <img
              className="object-fill object-center aspect-square h-40 "
              alt={title}
              src={thumbnail}
            />
          </div>
        </div>
        <div className=" flex-item flex-1">
          <div className="flex h-full flex-col align-middle content-center pl-3 pr-3 justify-center">
            <h3 className="text-3xl text-center">{rank}</h3>
            <p className=" text-2xl text-center">{title}</p>
            <p className="text-center">{production}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
