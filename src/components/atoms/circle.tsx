import { cn } from "#utils/index";

type SizeUnits = "em" | "rem" | "px" | "%" | "vh" | "vw";
type Size = `${number}${SizeUnits}` | `-${number}${SizeUnits}`;

type SphereProps = {
    className?: string;
    height: Size;
    width: Size;
    color: string;
}

export default function Sphere({ className = "", height, width, color }: SphereProps) {
    return <div style={
        {
            height, width,
            backgroundColor: color,
        }
    } className={
        cn(
            "rounded-full animate-pulse max-md:scale-50",
            className,
        )
    }></div>;
}