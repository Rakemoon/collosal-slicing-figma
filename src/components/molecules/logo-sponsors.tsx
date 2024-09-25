import { ReactNode } from "react";

type LogoSponsorsProps = {
    readonly children: ReactNode;
};

export default function LogoSponsors({ children }: LogoSponsorsProps) {
    return <div className="border-b border-t border-white border-opacity-10 p-5 flex justify-center items-center">
        {children}
    </div>;
}