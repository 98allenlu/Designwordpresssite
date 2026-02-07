import React from "react";
import { cn } from "@/lib/utils";
import svgPaths from "@/imports/svg-wb47w8l6ix";
import sectionBg from 'figma:asset/04bf5cb42a5739eaf380966456c9033eb8af5779.png';

interface TornPaperSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  topEdge?: boolean;
  bottomEdge?: boolean;
  backgroundClass?: string;
  showBackgroundTexture?: boolean;
}

export function TornPaperSection({
  children,
  className,
  topEdge = true,
  bottomEdge = true,
  backgroundClass = "bg-background",
  showBackgroundTexture = true,
  ...props
}: TornPaperSectionProps) {
  // Derive the text color class for the SVG from the background class
  // e.g., "bg-primary" -> "text-primary"
  const fillClass = backgroundClass.replace("bg-", "text-");

  return (
    <div 
      className={cn("relative w-full", backgroundClass, className)} 
      style={showBackgroundTexture ? {
        backgroundImage: `url(${sectionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : undefined}
      {...props}
    >
      {/* Top Edge */}
      {topEdge && (
        <div className={cn("absolute top-0 left-0 w-full h-[50px] md:h-[80px] -translate-y-[99%] rotate-180 z-10 pointer-events-none", fillClass)}>
          <svg className="block w-full h-full" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1920 79.9554">
            <g>
              <path d={svgPaths.p56558a0} />
              <path d={svgPaths.pd38340} />
              <path d={svgPaths.p258d2630} />
            </g>
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom Torn Edge */}
      {bottomEdge && (
        <div className={cn("absolute bottom-0 left-0 w-full h-[50px] md:h-[80px] translate-y-[99%] z-10 pointer-events-none", fillClass)}>
          <svg className="block w-full h-full" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1920 79.9554">
            <g>
              <path d={svgPaths.p56558a0} />
              <path d={svgPaths.pd38340} />
              <path d={svgPaths.p258d2630} />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
