import { cn } from "#utils/index";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default function Form({className = "", children, ...props}: DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>) {
    return <form
        {...props}
        className={
            cn(
                "flex p-5 flex-col gap-5 w-full",
                className
            )
        } >
        {children}
    </form>;
}

Form.Line = function FormLine({ children }: { children?: ReactNode}) {
    return <div className="flex gap-5 w-full max-md:flex-col">{children}</div>;
}

Form.Value = function FormValue({ children, inline = false }: { children?: ReactNode; inline?: boolean }) {
    return <div className={
        cn(
            "flex gap-1 flex-grow w-full",
            inline ? "flex-row items-center" : "flex-col",
            "max-md:flex-col"
        )
    }>{children}</div>;
}