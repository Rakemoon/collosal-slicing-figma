import { cn } from "#utils/index";
import { forwardRef, ReactNode } from "react";

type PageTitleProps = {
    className?: string;
    children: ReactNode;
}

const PageTitle = forwardRef<HTMLHeadingElement, PageTitleProps>(
    function PageTitle({ children, className = "" }, ref) {
        return <h2
            ref={ref} 
            className={
            cn(
                "text-4xl font-bold",
                className,
            )
        }>{children}</h2>
    }
);

export default PageTitle;