import { ReactNode } from "react";

type CalloutProps = {
    readonly message: string;
    readonly children: ReactNode;
};

export default function Callout ({ message, children }: CalloutProps) {
    return <div className="border-b border-t border-white border-opacity-10 grid grid-cols-3 p-5 items-center">
        <p className="font-bold text-3xl col-span-2">
            {message}
        </p>
        <div className="flex gap-2 h-fit w-fit">
            {children}
        </div>
    </div>;
}