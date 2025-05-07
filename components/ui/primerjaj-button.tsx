"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HTMLAttributes } from "react";

interface PrimerjajButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  fullWidth?: boolean;
  href?: string;
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
}

export function PrimerjajButton({
  fullWidth = false,
  href = "/vprasalnik",
  className = "",
  size = "lg",
  children,
  ...props
}: PrimerjajButtonProps) {
  const buttonComponent = (
    <Button
      asChild
      size={size}
      className={`bg-accent text-secondary-foreground hover:bg-accent/90 hover:-translate-y-0.5 transition-all rounded-full border-0 group ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      style={{ borderRadius: "9999px", transition: "all 0.2s ease" }}
    >
      <Link href={href} className="flex items-center gap-2" {...props}>
        {children}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
      </Link>
    </Button>
  );

  // Otherwise return the button as is
  return buttonComponent;
}
