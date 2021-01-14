const TopPage = ({breeds}) => {
  return (
    <div className="container px-4 mx-auto mt-4 text-warmGray-900">
      <h1 className="text-4xl font-bold">Top 10 most searched breeds</h1>
      <div className="flex flex-col my-12 gap-14">
        {breeds.map((breed, i) => (
          <div key={breed.id} className="flex">
            <img
              src={breed.image}
              alt={breed.url}
              className="object-cover w-full 2xl:w-80 2xl:h-80 xl:w-72 xl:h-72 lg:w-56 lg:h-56 md:w-88 md:h-88 sm:w-72 sm:h-72 rounded-3xl"
            />
            <div className="px-12">
              <h2 className="text-4xl font-semibold">
                {i + 1}. {breed.name}
              </h2>
              <p className="mt-6">{breed.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPage;
