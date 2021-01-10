const SearchInput = () => {
  return (
    <div className="relative mt-4 sm:mt-8">
      <button className="block h-10 px-3 font-medium transition bg-white rounded-full sm:hidden hover:bg-gray-100 active:bg-gray-300">
        <span className="mr-2 align-middle">Search</span>
        <span className="align-middle text-warmGray-900 material-icons">search</span>
      </button>
    </div>
  );
};

export default SearchInput;
