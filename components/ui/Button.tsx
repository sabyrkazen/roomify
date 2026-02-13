import { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export const Button = ({
                         variant = 'primary',
                         size = 'md',
                         fullWidth = false,
                         className = '',
                         children,
                         ...props
                       }: ButtonProps) => {
  const baseClass = 'btn'
  const variantClass = `btn--${variant}`
  const sizeClass = `btn--${size}`
  const fullWidthClass = fullWidth ? 'btn--full' : ''

  const combineClasses = [
    baseClass,
    variantClass,
    sizeClass,
    fullWidthClass,
    className,
  ].filter(Boolean).join(' ')

  return (
    <button className={combineClasses} {...props}>
      {children}
    </button>
  )
}