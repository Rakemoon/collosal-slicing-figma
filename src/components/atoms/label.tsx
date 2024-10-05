import { cn } from "#utils/index";
import { forwardRef, ReactNode, LabelHTMLAttributes } from "react";

type LabelProps = { children: ReactNode } & LabelHTMLAttributes<HTMLLabelElement>;

const Label = forwardRef<HTMLLabelElement, LabelProps>(
    function Label({ children, className = "" }, ref) {
        return <label
            ref={ref}
            className={
                cn(
                    "text-sm font-normal text-white text-opacity-60",
                    className
                )
            }> {children} </label>;
        }
);

export default Label;