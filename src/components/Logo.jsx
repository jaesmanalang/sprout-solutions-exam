import logoSrc from '../assets/sprout-solutions-logo.png';

const Logo = ({ children }) => {
  return (
    <div className="flex items-center flex-shrink">
      <div>
        <img
          className="md:h-10 h-7 mr-2"
          src={logoSrc}
          alt="Sprout Solutions"
        />
      </div>
      <div className="md:text-3xl text-xl border-l border-neutral-600 leading-none px-2 text-inherit font-extralight">
        {children}
      </div>
    </div>
  );
};
export default Logo;
