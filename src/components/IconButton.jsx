import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = ({ icon, onClick, ...restProps }) => {
  return (
    <button
      className="py-0.5 px-2 rounded hover:bg-neutral-100"
      onClick={onClick}
      {...restProps}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
export default IconButton;
