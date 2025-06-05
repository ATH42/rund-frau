import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white shadow-1 hover:bg-primary-darker',
        white: 'bg-white text-primary-darker shadow-1 hover:bg-primary-darker hover:text-white',
        whiteLight: 'bg-white text-primary-darker shadow-1 hover:bg-primary hover:text-white',
        dark: 'bg-primary-dark text-white shadow-1 hover:bg-primary-darker hover:text-white',
        calendar: 'bg-white text-primary-darker hover:bg-primary-darker hover:text-white',
        none: 'bg-transparent text-primary-darker hover:bg-white hover:text-primary-darker',
      },
      size: {
        default: 'px-[20px] py-[12px] rounded-full',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
        calendar: 'h-9 w-9 rounded-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
