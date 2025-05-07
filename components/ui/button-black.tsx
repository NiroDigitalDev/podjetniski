import { Button } from "@/components/ui/button"
import { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export function ButtonBlack({ children, className, variant, ...props }: ComponentPropsWithoutRef<typeof Button>) {
  return (
    <Button 
      {...props}
      className={cn(
        "transition-all rounded-full flex items-center gap-2 group",
        variant === "outline" 
          ? "bg-primary text-white hover:bg-primary/90 border-0" 
          : "bg-gray-900 text-secondary hover:bg-gray-800 hover:-translate-y-0.5",
        className
      )}
      style={{ borderRadius: '9999px', transition: 'all 0.2s ease' }}
    >
      <div className="flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:-rotate-45" />
      </div>
    </Button>
  )
} 