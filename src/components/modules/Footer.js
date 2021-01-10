const Footer = () => {
  return (
    <footer className="container px-4 mx-auto">
      <div className="flex items-center justify-center py-3 bg-black md:justify-between 2xl:px-24 xl:px-20 lg:px-16 md:px-14 xl:py-6 lg:py-5 rounded-t-3xl">
        <img className="hidden md:block" src="/CatwikiLogoWhite.svg" alt="cat-wiki-logo" />
        <p className="text-white">
          {'Made by © '}
          <a href="https://github.com/durashere" target="_blank" rel="noreferrer">
            durashere
          </a>
          {' - '}
          <a href="https://devchallenges.io/" target="_blank" rel="noreferrer">
            DevChallenges.io
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
