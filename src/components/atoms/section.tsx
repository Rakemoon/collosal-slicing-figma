import { cn } from "#utils/index";
import { ReactNode } from "react";

type SectionProps = {
    children: ReactNode,
    className?: string
}

export default function Section({ children, className = "" }: SectionProps) {
    return <section
        className={
            cn(
                "grid grid-cols-1 grid-rows-1",
                className
            )
        }>
        {children}
    </section>
}

Section.Front = function SectionFront({ children, className = "" }: SectionProps) {
    return <div
        className={
            cn(
                "h-screen px-52 py-5 flex flex-col items-center gap-5 backdrop-blur-lg bg-dark bg-opacity-90",
                "[grid-row:_1_/_2] [grid-column:_1_/_2]",
                className
            )
        }>
        {children}
    </div>

}

Section.Back = function SectionBack({ children, className = "" }: SectionProps) {
    return <div
        className={
            cn(
                "relative w-full h-full",
                "[grid-row:_1_/_2] [grid-column:_1_/_2]",
                className
            )
        }>
        {children}
    </div>;
}