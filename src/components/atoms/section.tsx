import { cn } from "#utils/index";
import { ReactNode } from "react";
import Sphere from "./circle";
import Navbar from "#components/organism/navbar";

type SectionProps = {
    children?: ReactNode,
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

Section.Front = function SectionFront({ children, className = "", isFirst = false }: SectionProps & { isFirst?: boolean }) {
    return <div
        className={
            cn(
                "h-screen px-[13vw] py-5 flex flex-col items-center gap-5 backdrop-blur-lg bg-dark bg-opacity-90",
                "[grid-row:_1_/_2] [grid-column:_1_/_2]",
                className,
            )
        }>
        {isFirst && <Navbar variant="naked" />}
        {children}
    </div>

}

Section.Back = function SectionBack({ children, className = "", isFirst = false }: SectionProps & { isFirst?: boolean }) {
    return <div
        className={
            cn(
                "relative w-full h-full",
                "[grid-row:_1_/_2] [grid-column:_1_/_2]",
                className
            )
        }>
        {isFirst && <>
            <Sphere
            color="#16FCD2"
            width="780px"
            height="780px"
            className="absolute -top-[100px] left-[200px]"/>
            <Sphere
            color="#FCA016"
            width="600px"
            height="600px"
            className="absolute bottom-[0px] -left-[200px]"/>
            <Sphere
            color="#FC165B"
            width="780px"
            height="780px"
            className="absolute -top-[200px] -right-[200px]"/>
        </>}
        {children}
    </div>;
}