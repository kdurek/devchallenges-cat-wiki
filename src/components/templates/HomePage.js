import Link from 'next/link';
import Search from '../elements/Search';
import CatCard from '../elements/CatCard';

const HomePage = ({breeds, topBreedsData}) => (
  <div className="container px-4 mx-auto mt-4">
    <section className="overflow-hidden rounded-3xl">
      <div className="relative">
        <img className="" src="/HeroImagelg.png" alt="" />
        <div className="absolute top-0 w-full h-full">
          <div className="flex flex-col items-start justify-center w-1/2 h-full pl-8 2xl:pl-24 xl:pl-20 lg:pl-16 md:pl-14 sm:pl-12">
            <img
              className="w-24 lg:w-60 md:w-40 sm:w-32"
              src="/CatwikiLogoWhite.svg"
              alt="cat-wiki-logo"
            />
            <p className="mt-2 text-xs text-white md:text-2xl sm:text-xl sm:mt-4">
              Get to know more about your cat breed
            </p>
            <Search breeds={breeds} />
          </div>
        </div>
      </div>
      <div className="px-8 py-4 bg-warmGray-200 2xl:px-24 xl:px-20 lg:px-16 md:px-14 sm:px-12">
        <p className="text-xs font-medium underline-short sm:text-xl">Most Searched Breeds</p>
        <div className="flex items-end justify-between mt-4 sm:mt-8">
          <h2 className="w-3/4 text-lg font-bold lg:text-5xl sm:text-4xl md:w-1/2 sm:w-3/4">
            66+ Breeds For you to discover
          </h2>
          <Link href="/top">
            <button className="hidden font-bold text-warmGray-900 focus:outline-none text-opacity-60 sm:block animate-underline">
              <span>SEE MORE </span>
              <span className="align-middle material-icons">search</span>
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between mt-2 mb-10 -mx-4 sm:mt-4">
          {topBreedsData.slice(0, 4).map(breed => (
            <CatCard key={breed.id} breed={breed} />
          ))}
        </div>
      </div>
    </section>
    <section className="flex flex-col items-center my-16 -mx-4 2xl:px-24 xl:px-20 lg:px-16 md:px-14 md:flex-row">
      <div className="w-full px-4 mt-4 md:w-1/2">
        <h2 className="text-4xl font-bold lg:text-5xl md:text-4xl sm:text-5xl topline-short">
          Why should you have a cat?
        </h2>
        <p className="mt-10 text-lg font-medium lg:text-xl sm:text-xl lg:mt-10 md:mt-7 ">
          Having a cat around you can actually trigger the release of calming chemicals in your body
          which lower your stress and anxiety leves
        </p>
        <p className="mt-10 mb-10 lg:mt-10 md:mt-7">
          <Link href="/top">
            <button className="font-bold text-warmGray-900 text-opacity-60 animate-underline">
              <span>READ MORE </span>
              <span className="align-middle material-icons">search</span>
            </button>
          </Link>
        </p>
      </div>
      <div className="grid w-full gap-6 px-4 mt-4 md:w-1/2 grid-rows-2-auto grid-cols-2-auto xl:gap-8 lg:gap-6 md:gap-5 sm:gap-10">
        <img className="transition transform hover:scale-105" src="/image2.png" alt="image2" />
        <img
          className="row-span-2 transition transform hover:scale-105"
          src="/image3.png"
          alt="image3"
        />
        <img
          className="w-3/4 transition transform hover:scale-105 justify-self-end"
          src="/image1.png"
          alt="image1"
        />
      </div>
    </section>
  </div>
);

export default HomePage;
