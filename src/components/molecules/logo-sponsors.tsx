import { cn } from "#utils/index";
import { ReactNode } from "react";

type LogoSponsorsProps = {
    readonly children: ReactNode;
    readonly className?: string;
};

export default function LogoSponsors({ children, className = "" }: LogoSponsorsProps) {
    return <div className={
        cn("border-b border-t border-white border-opacity-10 p-5 flex justify-center items-center", className)
    }>
        {children}
    </div>;
}