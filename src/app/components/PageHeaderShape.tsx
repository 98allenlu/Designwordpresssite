import React from "react";
import { cn } from "@/lib/utils";
import svgPaths from "@/imports/svg-ibz78gf4gt";

interface PageHeaderShapeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  fillColor?: string;
}

export function PageHeaderShape({
  children,
  className,
  fillColor = "#00416A",
  ...props
}: PageHeaderShapeProps) {
  return (
    <div className={cn("relative w-full h-[370px] flex items-start pt-10 justify-center text-white", className)} {...props}>
      <div className="absolute -top-4 left-0 w-full h-[55%] overflow-hidden">
        <svg 
          className="w-full h-full block" 
          fill="none" 
          preserveAspectRatio="none" 
          viewBox="0 0 1357.69 648"
        >
          <path d={svgPaths.p28e1fb80} fill={fillColor} />
        </svg>
      </div>
      <div className="relative z-10 w-full px-4 text-center">
        {children}
      </div>
    </div>
  );
}
