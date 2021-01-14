import Link from 'next/link';

const CatCard = ({breed}) => {
  return (
    <Link href={`/breeds/${breed.id}`}>
      <div className="relative px-4 mt-4 cursor-pointer group 2xl:w-80 xl:w-68 lg:w-56 md:w-40 sm:w-68 w-37">
        <img
          className="relative z-10 object-cover w-full 2xl:h-72 xl:h-60 lg:h-48 md:h-32 sm:h-60 h-29 rounded-2xl"
          src={breed.image}
          alt="cat"
        />
        <p className="relative z-10 mt-1 text-lg font-semibold sm:mt-4">{breed.name}</p>
        <div className="absolute z-0 w-4 h-24 transition-all transform bg-orange-300 group-hover:-translate-x-4 2xl:w-8 2xl:left-4 xl:left-5 lg:left-5 lg:w-6 md:w-4 left-6 2xl:top-12 2xl:h-48 xl:h-40 xl:top-10 lg:top-8 lg:h-32 md:top-6 md:h-20 top-8 rounded-2xl"></div>
      </div>
    </Link>
  );
};

export default CatCard;
