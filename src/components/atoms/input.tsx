import { cn } from "#utils/index";
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const Input = forwardRef<HTMLInputElement, InputProps>(
    function Input({ className = "", ...props}, ref) {
        return <input
            className={
                cn(
                    "bg-transparent border-white border border-opacity-10 outline-none rounded-md text-base font-normal p-2",
                    className
                )
            }
            ref={ref}
            {...props} />;
    }
)

export default Input;