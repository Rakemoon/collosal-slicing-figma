import { ReactNode } from "react";

type CalloutProps = {
    readonly message: string;
    readonly children: ReactNode;
};

export default function Callout ({ message, children }: CalloutProps) {
    return <div className="border-b border-t border-white border-opacity-10 grid grid-cols-12 py-10 items-center">
        <p className="font-bold text-3xl col-span-6">
            {message}
        </p>
        <div className="flex gap-2 h-fit w-fit place-self-end col-span-6">
            {children}
        </div>
    </div>;
}