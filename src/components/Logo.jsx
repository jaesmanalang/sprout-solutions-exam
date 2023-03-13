import logoSrc from '../assets/sprout-solutions-logo.png';

const Logo = ({ children }) => {
  return (
    <div className="flex items-center">
      <div>
        <img className="h-10 mr-2" src={logoSrc} alt="Sprout Solutions" />
      </div>
      <div className="text-3xl border-l border-neutral-600 leading-none px-2 text-inherit font-extralight">
        {children}
      </div>
    </div>
  );
};
export default Logo;
