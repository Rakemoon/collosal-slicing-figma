import { cn } from "#utils/index";
import { forwardRef, ReactNode } from "react";

type PageDescriptionProps = {
    className?: string;
    children: ReactNode;
}

const PageDescription = forwardRef<HTMLParagraphElement, PageDescriptionProps>(
    function PageDescription({ children, className = "" }, ref) {
        return <p
            ref={ref} 
            className={
            cn(
                "text-white text-opacity-60 text-base font-medium",
                className,
            )
        }>{children}</p>
    }
);

export default PageDescription;