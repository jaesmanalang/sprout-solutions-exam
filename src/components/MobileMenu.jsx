import { navLinks } from '../utils/constants';
import NavDropdown from './NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const MobileMenu = () => {
  return (
    <div className="xl:hidden block w-full grow pt-3">
      <ul className="flex flex-col items-start gap-1 text-neutral-400">
        {navLinks.map((navLink) => (
          <li key={navLink.id}>
            <NavDropdown text={navLink.text} items={navLink.dropdownItems} />
          </li>
        ))}
      </ul>
      <div className="flex sm:hidden items-start flex-col gap-4 text-neutral-400">
        <div className="flex-items-center gap-4">
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
    </div>
  );
};
export default MobileMenu;
