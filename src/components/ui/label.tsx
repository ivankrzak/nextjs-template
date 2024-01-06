import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'lib/utils'
import { AsterixIcon, TooltipIcon } from 'components/icons'

const labelVariants = cva(
  'inline-block text-sm font-medium leading-none text-slate-600 dark:text-white',
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & { required?: boolean; tooltip?: string }
>(({ className, children, required, tooltip, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props}>
    <div className="flex items-center gap-0.5">
      {children}
      {required && <AsterixIcon className="h-3 w-3 text-blue-600 dark:text-blue-500" />}
      {/* Temporary tooltip - will be done in separate PR */}
      {tooltip && <TooltipIcon className="ml-1 h-4 w-4 text-slate-500 dark:text-slate-400" />}
    </div>
  </LabelPrimitive.Root>
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
