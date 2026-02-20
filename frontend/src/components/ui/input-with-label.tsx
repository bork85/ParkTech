import * as React from "react"
import { Input } from "./input"
import { Label } from "./label"
import { cn } from "@/lib/utils"

interface InputWithLabelProps extends React.ComponentProps<"input"> {
  label: string
  labelClassName?: string
  error?: string
  isInline?: boolean
}

const InputWithLabel = React.forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ error, label, labelClassName, className, id, isInline, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
    
    return (
      <div className={cn("mb-2", isInline && "flex items-center gap-2")}>
        <Label htmlFor={inputId} className={cn(labelClassName)}>
          {label}
        </Label>
        <Input
          id={inputId}
          className={cn(className,
            error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/50")
          }
          ref={ref}
          {...props}
        />
        {error && <p className="text-xs mt-1 text-red-500">{error}</p>}
      </div>
    )
  }
)
InputWithLabel.displayName = "InputWithLabel"

export { InputWithLabel }