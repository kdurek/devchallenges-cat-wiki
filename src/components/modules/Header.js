import Link from 'next/link';

const Header = () => {
  return (
    <div className="container px-4 mx-auto mt-2 cursor-pointer">
      <Link href="/">
        <img className="w-48" src="/CatwikiLogo.svg" alt="cat-wiki-logo" />
      </Link>
    </div>
  );
};

export default Header;
