import { faBookmark, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Table = ({ columns, data }) => {
  function formatDate(dateInput) {
    return dateInput.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  }

  function formatTime(dateInput) {
    return dateInput.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  }
  return (
    <div className="border border-neutral-400 rounded overflow-x-auto">
      <table className="table-fixed">
        <thead>
          <tr>
            {columns?.map((col, index) => (
              <th
                className="text-left text-sm px-3 py-4 text-emerald-800 font-bold"
                key={index}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr key={row.id}>
              {Object.keys(row)
                .filter((key) => key !== 'id')
                .map((key) => (
                  <td
                    className="py-2 px-3 text-sm text-emerald-800 font-bold border-t border-neutral-400 last:w-full"
                    key={key}
                  >
                    {key === 'sentThrough' && row[key] ? (
                      <span className="inline-flex gap-3 w-52 max-w-[175px] whitespace-nowrap overflow-ellipsis overflow-hidden">
                        {row[key].includes('post') && (
                          <FontAwesomeIcon icon={faBookmark} />
                        )}
                        {row[key].includes('text') && (
                          <FontAwesomeIcon icon={faMobileAlt} />
                        )}
                      </span>
                    ) : (
                      <span className="inline-block w-52 max-w-[175px] whitespace-nowrap overflow-ellipsis overflow-hidden">
                        {typeof row[key] === 'object' ? (
                          <span className="flex flex-col items-start">
                            <span>{formatDate(row[key])}</span>
                            {key !== 'dateCreated' && (
                              <span className="text-neutral-500">
                                {formatTime(row[key])}
                              </span>
                            )}
                          </span>
                        ) : (
                          row[key]
                        )}
                      </span>
                    )}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
