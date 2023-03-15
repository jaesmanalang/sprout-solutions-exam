import clsx from 'clsx';

const FilterButton = ({
  children,
  variant = 'primary',
  value,
  title,
  active,
  ...restProps
}) => {
  const buttonClassName = clsx(
    'inline-flex items-center px-2 py-1 rounded gap-2 text-sm font-medium',
    {
      'bg-green-100 text-green-600': active && variant === 'primary',
      'bg-orange-100 text-orange-600': active && variant === 'secondary',
    }
  );

  const pillClassName = clsx(
    'inline-flex items-center justify-center font-medium px-2 text-xs rounded-full',
    {
      'bg-green-600 text-white': variant === 'primary',
      'bg-orange-600 text-white': variant === 'secondary',
    }
  );

  return (
    <button className={buttonClassName} {...restProps}>
      <span className={pillClassName}>{value}</span>
      {title}
    </button>
  );
};
export default FilterButton;
