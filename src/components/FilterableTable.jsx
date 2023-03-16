import FilterButton from './FilterButton';
import {
  faCaretDown,
  faSearch,
  faBookmark,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tableData } from '../utils/constants';
import Table from './Table';

const FilterableTable = () => {
  const columns = [
    { field: 'title', header: 'TITLE' },
    { field: 'message', header: 'MESSAGE' },
    { field: 'sentBy', header: 'SENT BY' },
    { field: 'sentThrough', header: 'SENT THROUGH', isIcon: true },
    { field: 'dateCreated', header: 'DATE CREATED' },
    { field: 'startDate', header: 'START DATE' },
    { field: 'endDate', header: 'END DATE' },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-between mb-4">
        <div>
          <FilterButton title="All" value={10} active />
          <FilterButton variant="secondary" title="Drafts" value={10} />
        </div>
        <div className="sm:w-1/2 w-full flex flex-col sm:flex-row items-center gap-4">
          <div className="grow relative sm:w-1/2 w-full">
            <select
              name="filter by"
              className="w-full py-2 pl-3 pr-6 border border-neutral-500 rounded appearance-none"
            >
              <option value="">Filter by</option>
            </select>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>
          <div className="grow relative sm:w-1/2 w-full">
            <input
              className="w-full py-2 px-3 border border-neutral-500 rounded"
              type="text"
              placeholder="Search..."
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
      <Table columns={columns} data={tableData} />
    </div>
  );
};
export default FilterableTable;
