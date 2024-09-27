import { cn } from "#utils/index";
import { forwardRef, ReactNode } from "react";

type SectionBadgeProps = {
    className?: string;
    children: ReactNode;
}

const SectionBadge = forwardRef<HTMLHeadingElement, SectionBadgeProps>(
    function SectionBadge({ children, className = "" }, ref) {
        return <h1
            className={
                cn(
                    "text-green text-base font-semibold",
                    className,
                )
            }
            ref={ref}>{children}</h1>;
    }
)

export default SectionBadge;