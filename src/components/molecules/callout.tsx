import { ReactNode } from "react";

type CalloutProps = {
    readonly message: string;
    readonly children: ReactNode;
};

export default function Callout ({ message, children }: CalloutProps) {
    return <div className="border-b border-t border-white border-opacity-10 flex py-10 max-md:flex-col gap-10">
        <p className="font-bold text-3xl">
            {message}
        </p>
        <div className="flex gap-2 h-fit w-fit items-center max-md:flex-col max-md:w-full">
            {children}
        </div>
    </div>;
}