import Link from 'next/link';
import {useState} from 'react';
import {firebase, db} from '../../../firebase';

const Search = ({breeds}) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = id => {
    db.doc(id)
      .update({
        count: firebase.firestore.FieldValue.increment(1),
      })
      .catch(function () {
        db.doc(id).set({count: 1});
      });
  };

  return (
    <div className="relative mt-4 sm:mt-8">
      <button
        onClick={() => setSearchOpen(!searchOpen)}
        className="block h-10 px-3 font-medium transition bg-white rounded-full sm:hidden hover:bg-gray-100 active:bg-gray-300"
      >
        <span className="mr-2 align-middle">Search</span>
        <span className="align-middle text-warmGray-900 material-icons">search</span>
      </button>
      {searchOpen && (
        <div className="container fixed top-0 left-0 z-50 flex flex-col w-screen h-screen gap-6 p-2 bg-white">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="self-end p-3 rounded-lg bg-trueGray-200"
          >
            <span className="align-middle material-icons">close</span>
          </button>
          <div className="">
            <input
              type="text"
              onChange={e => setSearchValue(e.target.value)}
              value={searchValue}
              placeholder="Enter your breed"
              className="relative w-full px-3 py-3 pr-10 text-lg font-medium bg-white border shadow outline-none border-warmGray-900 placeholder-warmGray-400 text-warmGray-900 rounded-3xl focus:outline-none focus:shadow-outline"
            />
            <span className="absolute z-10 items-center justify-center w-8 h-full py-3 pr-3 text-base font-medium leading-snug text-center bg-transparent rounded right-2 text-warmGray-900">
              <i className="material-icons">search</i>
            </span>
          </div>
          {breeds
            .filter(breed => breed.name.toLowerCase().includes(searchValue))
            .map(breed => (
              <Link key={breed.id} href={`/breeds/${breed.id}`}>
                <button
                  onClick={() => handleSearch(breed.id)}
                  className="w-full px-3 py-1 text-left rounded-3xl hover:bg-trueGray-400"
                >
                  {breed.name}
                </button>
              </Link>
            ))}
        </div>
      )}
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
        <div className="absolute z-10 flex-col hidden w-full p-3 overflow-auto bg-white max-h-56 sm:flex rounded-3xl">
          {breeds
            .filter(breed => breed.name.toLowerCase().includes(searchValue))
            .map(breed => (
              <Link key={breed.id} href={`/breeds/${breed.id}`}>
                <button
                  onClick={() => handleSearch(breed.id)}
                  className="w-full p-1 text-left rounded-3xl hover:bg-trueGray-400"
                >
                  {breed.name}
                </button>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
