import { twMerge } from "tailwind-merge"
import { forwardRef } from "react"


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  type = 'button',
  ...props
}, ref) => {
  return (
    <button

      type={type}
      className={twMerge(`
      w-full
      rounded-full
      bg-purple-950
      px-3
      py-3
      border
      border-transparent
      disabled:cursor-not-allowed
      disabled:opacity-50
      text-purple-50
      font-bold
      hover:opacity-75
      transition
      ease-in-out
      `,
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}

    </button>
  )
})

Button.displayName = "Button";


export default Button
