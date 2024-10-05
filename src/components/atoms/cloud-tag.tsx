import { cn } from "#utils/index";
import { forwardRef, ReactNode } from "react";

type CloudTagProps = {
    children: ReactNode;
    className?: string;
}

const CloudTag = forwardRef<HTMLSpanElement, CloudTagProps>(
    function CloudTag({ children, className = "" }, ref) {
        return <span
            ref={ref}
            className={
                cn(
                    "inline-flex items-center rounded-full text-sm font-medium bg-light text-white box-border px-7 py-3 border-white border-opacity-10 border",
                    className
                ) 
            }>
            {children}
        </span>;
    }
);

export default CloudTag;