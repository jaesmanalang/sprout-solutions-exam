import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

const Button = ({ children, variant = 'success', icon, ...restProps }) => {
  const buttonClassName = clsx('inline-flex items-center py-1 px-2 rounded', {
    'text-white bg-green-600 hover:bg-green-700 transition ease-out':
      variant === 'success',
  });

  return (
    <button className={buttonClassName} {...restProps}>
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {children}
    </button>
  );
};
export default Button;
