import Link from 'next/link';
import {useState} from 'react';

const Search = ({breeds}) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="relative mt-4 sm:mt-8">
      <button className="block h-10 px-3 font-medium transition bg-white rounded-full sm:hidden hover:bg-gray-100 active:bg-gray-300">
        <span className="mr-2 align-middle">Search</span>
        <span className="align-middle text-warmGray-900 material-icons">search</span>
      </button>
      <div className="relative flex-wrap items-stretch hidden w-full mb-3 sm:flex">
        <input
          type="text"
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder="Enter your breed"
          className="relative w-full px-3 py-3 pr-10 text-sm bg-white shadow outline-none placeholder-warmGray-400 text-warmGray-900 rounded-3xl focus:outline-none focus:shadow-outline"
        />
        <span className="absolute right-0 z-10 items-center justify-center w-8 h-full py-3 pr-3 text-base font-normal leading-snug text-center bg-transparent rounded text-warmGray-400">
          <i className="material-icons">search</i>
        </span>
      </div>
      {breeds.find(breed => breed.name.toLowerCase().includes(searchValue)) && searchValue !== '' && (
        <div className="absolute z-10 items-stretch w-full p-3 bg-white rounded-3xl">
          {breeds
            .filter(breed => breed.name.toLowerCase().includes(searchValue))
            .map(breed => (
              <Link key={breed.id} href={`/breeds/${breed.id}`}>
                <button className="">{breed.name}</button>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
