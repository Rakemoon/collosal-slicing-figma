import { cn } from "#utils/index";
import { DetailedHTMLProps, HTMLAttributes } from "react"

type SelectProps = DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export default function Select({className = "", children, ...props}: SelectProps) {
    return <select 
        {...props}
        className={
            cn(
                "bg-transparent border-white border border-opacity-10 outline-none rounded-md text-base font-normal p-2",
                "appearance-none",
                className
            )
        }
    >
        {children}
    </select>
}

type OptionProps = DetailedHTMLProps<HTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;

Select.Option = function SelectOption({ className = "", children, ...props }: OptionProps) {
    return <option
        {...props}
        className={
            cn(
                "bg-primary outline-none rounded-md text-base font-normal p-2",
                className
            )
        }
    >
        {children}
    </option>
}