import React from "react"

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  onClick?: React.MouseEventHandler;
}

const defaultStyling = "text-sm py-2.5 flex justify-center mb2 font-medium rounded-lg"

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    children,
    onClick,
  } = props

  return (
    <button onClick={onClick} ref={ref} className={`${defaultStyling} ${className}`}>
      {children}
    </button>
  )
})

export default Button
