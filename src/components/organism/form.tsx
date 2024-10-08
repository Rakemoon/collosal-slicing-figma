import { cn } from "#utils/index";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default function Form({className = "", children, ...props}: DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>) {
    return <form
        {...props}
        className={
            cn(
                "flex p-5 flex-col gap-5 w-max",
                className
            )
        } >
        {children}
    </form>;
}

Form.Line = function FormLine({ children }: { children?: ReactNode}) {
    return <div className="flex gap-5 w-full">{children}</div>;
}

Form.Value = function FormValue({ children, inline = false }: { children?: ReactNode; inline?: boolean }) {
    return <div className={
        cn(
            "flex gap-1 flex-grow w-1/2",
            inline ? "flex-row items-center" : "flex-col"
        )
    }>{children}</div>;
}