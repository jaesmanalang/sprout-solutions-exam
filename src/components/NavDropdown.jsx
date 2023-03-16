import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import useToggle from '../hooks/useToggle';

const NavDropdown = ({ text, items }) => {
  const { state: isOpen, toggle: toggleDropdown } = useToggle();

  return (
    <div className="relative inline-block text-left">
      <button
        className=" hover:text-white py-2 text-sm"
        onClick={toggleDropdown}
      >
        {text} <FontAwesomeIcon icon={faCaretDown} size="xs" />
      </button>
      {isOpen && (
        <ul className="bg-white rounded py-2 absolute top-full left-0 w-[220px] shadow z-10">
          {items?.map((item, index) => (
            <li key={index}>
              <a
                className="block py-2 px-3 text-black hover:bg-neutral-200"
                href={item.url}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default NavDropdown;
