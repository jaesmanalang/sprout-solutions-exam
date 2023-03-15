import IconButton from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretRight,
  faBackwardStep,
  faForwardStep,
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ pageCount = 10, currentPage = 1, onPageChange }) => {
  return (
    <div className="flex items-center justify-between px-3 py-4 border-t border-neutral-400 text-sm  text-emerald-800">
      <div className="flex items-center gap-2">
        <span className="font-medium">Items per page</span>
        <div className="relative">
          <select
            name="filter by"
            className="w-full py-0 pl-3 pr-6 border border-neutral-500 rounded appearance-none text-sm"
          >
            <option value="10">10</option>
          </select>
          <FontAwesomeIcon
            icon={faCaretDown}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      <div className="flex items-center justify-center space-x-8">
        <IconButton icon={faBackwardStep} />
        <IconButton icon={faCaretLeft} />
        <span className="font-medium">
          Page{' '}
          <input
            className="border border-neutral-500 px-2 w-12 text-center rounded inline-block mx-2"
            type="text"
            value={1}
            readOnly
          />{' '}
          of 10
        </span>
        <IconButton icon={faCaretRight} />
        <IconButton icon={faForwardStep} />
      </div>
      <div>
        <span className="font-medium">
          Showing {currentPage} - {pageCount} of {currentPage}
        </span>
      </div>
    </div>
  );
};
export default Pagination;
