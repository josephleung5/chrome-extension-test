export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const defaultStyling = "text-sm py-2.5 flex justify-center mb2 font-medium rounded-lg"

const Button = (props: ButtonProps) => {
  const {
    className,
    children,
  } = props;

  return (
    <button className={`${defaultStyling} ${className}`}>
      {children}
    </button>
  )
}

export default Button