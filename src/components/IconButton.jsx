import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

const IconButton = ({ size, icon, onClick, className, ...restProps }) => {
  const buttonClassName = clsx(
    'py-0.5 px-2 rounded',
    className ? className : ''
  );
  return (
    <button className={buttonClassName} onClick={onClick} {...restProps}>
      <FontAwesomeIcon icon={icon} size={size} />
    </button>
  );
};
export default IconButton;
