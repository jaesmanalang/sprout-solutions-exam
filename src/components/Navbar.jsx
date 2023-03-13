import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { navLinks } from '../data/constants';

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 py-3 px-4 text-white flex items-center justify-between">
      <Logo>HR</Logo>
      <div className="flex items-center gap-5 text-neutral-400">
        <ul className="flex items-center gap-4">
          {navLinks.map((navItem) => (
            <li key={navItem.id}>
              <a className=" hover:text-white py-2 text-sm" href={navItem.url}>
                {navItem.text} <FontAwesomeIcon icon={faCaretDown} size="xs" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex-items-center gap-4 ml-4">
          <input
            className="bg-transparent outline-none border-b border-b-neutral-400 px-3 py-2 text-sm w-40 mr-2"
            type="text"
            placeholder="employee search"
          />
          <button>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </div>
        <button>
          <FontAwesomeIcon icon={faBell} size="lg" />
        </button>
        <button className="h-6 w-6 rounded-full bg-slate-400">
          <span className="sr-only">User Menu</span>
        </button>
        <button className="text-sm py-2 flex items-center text-sky-600">
          <span className="mr-2">Admin</span>
          <FontAwesomeIcon icon={faCaretDown} size="xs" />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
