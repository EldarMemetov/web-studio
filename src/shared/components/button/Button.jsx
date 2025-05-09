import clsx from 'clsx';
import s from './Button.module.scss';

const Button = ({
  children,
  type = 'button',
  variant = 'variant1',
  className,
  spanClassName,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsx(s.button, s[variant], className)}
      onClick={onClick}
      {...props}
    >
      <span className={spanClassName}>{children}</span>
    </button>
  );
};

export default Button;
