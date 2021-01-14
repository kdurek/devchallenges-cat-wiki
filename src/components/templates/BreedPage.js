const BreedPage = ({breed}) => {
  const breedInfo = breed[0].breeds[0];

  const ItemInfo = ({label, children}) => {
    return (
      <p className="mt-6">
        <span className="font-bold">{label}</span>
        <span className="font-medium">{children}</span>
      </p>
    );
  };

  const ItemLevel = ({label, level}) => {
    return (
      <div className="grid items-center mt-6 sm:grid-cols-2-info 2xl:w-2/3 xl:w-9/12 md:w-11/12">
        <span className="font-bold">{label}</span>
        <div className="flex flex-1 gap-3">
          {new Array(Number(level)).fill(1).map((x, i) => (
            <div key={i} className="w-full h-3 rounded-full bg-trueGray-700" />
          ))}
          {new Array(5 - Number(level)).fill(1).map((x, i) => (
            <div key={i} className="w-full h-3 rounded-full bg-warmGray-200" />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container px-4 mx-auto mt-4">
      <section className="flex flex-wrap 2xl:px-24 xl:px-20 lg:px-16 md:px-12 sm:px-8">
        <div className="relative w-full mb-10 2xl:w-72 2xl:h-72 xl:w-68 xl:h-68 lg:w-60 lg:h-60 lg:mr-10">
          <div className="absolute w-4 xl:-left-4 xl:w-8 2xl:h-48 xl:h-48 lg:h-40 sm:-left-3 sm:w-6 -left-2 h-3/4 bg-yellow-550 pos-center rounded-2xl"></div>
          <img
            className="relative z-10 object-cover w-full h-full rounded-2xl"
            src={breed[0].url}
            alt={breed[0].url}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-semibold">{breedInfo.name}</h2>
          <ItemInfo>{breedInfo.description}</ItemInfo>
          <ItemInfo label="Temperament: ">{breedInfo.temperament}</ItemInfo>
          <ItemInfo label="Origin: ">{breedInfo.origin}</ItemInfo>
          <ItemInfo label="Life Span: ">{breedInfo.life_span}</ItemInfo>
          <ItemLevel label="Adaptability: " level={breedInfo.adaptability} />
          <ItemLevel label="Affection level: " level={breedInfo.affection_level} />
          <ItemLevel label="Child Friendly: " level={breedInfo.child_friendly} />
          <ItemLevel label="Grooming: " level={breedInfo.grooming} />
          <ItemLevel label="Intelligence: " level={breedInfo.intelligence} />
          <ItemLevel label="Health issues: " level={breedInfo.health_issues} />
          <ItemLevel label="Social needs: " level={breedInfo.social_needs} />
          <ItemLevel label="Stranger friendly: " level={breedInfo.stranger_friendly} />
        </div>
      </section>
      <section className="my-20">
        <h2 className="text-4xl font-semibold">Other photos</h2>
        <div className="flex flex-wrap justify-between -mx-4">
          {breed.slice(1).map(breed => (
            <div key={breed.id} className="px-4 mt-10">
              <img
                src={breed.url}
                alt={breed.url}
                className="object-cover w-full 2xl:w-80 2xl:h-80 xl:w-72 xl:h-72 lg:w-56 lg:h-56 md:w-88 md:h-88 sm:w-72 sm:h-72 rounded-3xl"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BreedPage;
