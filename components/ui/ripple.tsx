import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
}

export const Ripple = React.memo(function Ripple({
    mainCircleSize = 210,
    mainCircleOpacity = 0.24,
    numCircles = 8,
    className,
    ...props
}: RippleProps) {
    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
                className
            )}
            {...props}
        >
            {Array.from({ length: numCircles }, (_, i) => {
                const size = mainCircleSize + i * 70;
                const opacity = Math.max(0, mainCircleOpacity - i * 0.03);
                const animationDelay = `${i * 0.06}s`;
                const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
                const borderOpacity = Math.max(0, 5 + i * 5);

                return (
                    <div
                        key={i}
                        className={`absolute animate-ripple rounded-full border`}
                        style={
                            {
                                width: `${size}px`,
                                height: `${size}px`,
                                opacity,
                                animationDelay,
                                borderStyle,
                                borderWidth: "1px",
                                borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%) scale(1)",
                                // maskImage:
                                //     "radial-gradient(circle, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
                                // WebkitMaskImage:
                                //     "radial-gradient(circle, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
                            } as CSSProperties
                        }
                    />
                );
            })}
        </div>
    );
});

Ripple.displayName = "Ripple";
