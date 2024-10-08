import Button from "#components/atoms/button";
import LogoName from "#components/molecules/logo-name";
import { cn } from "#utils/index";

type NavbarProps = {
    readonly variant?: "naked" | "highlight";
    readonly className?: string;
};
export default function Navbar({ variant, className = "" }: NavbarProps) {
    return <nav className={
        cn(
            "flex justify-between items-center gap-5 w-full relative",
            variant === "highlight" ? "bg-light py-4 px-10 rounded-md" : "",
            className
        )
    }>
        <input className="peer/navbar" type="checkbox" hidden id="navbar" />
        <LogoName />
        <ul className={
            cn(
                "transition-transform",
                "flex gap-10 items-end max-sm:scale-x-0 max-sm:translate-x-1/2",
                "max-sm:peer-checked/navbar:scale-x-100",
                "max-sm:peer-checked/navbar:translate-x-0",
                "max-sm:flex-col max-sm:absolute",
                "max-sm:bg-carddark right-0 top-10 max-sm:rounded-md max-sm:p-5 max-sm:shadow-sm",
            )
        }>
            <li>Services</li>
            <li>How We Work</li>
            <li>Projects</li>
            <li>About</li>
        </ul>
        <Button
            className="shadow-md max-sm:hidden"
            colorScheme="white"
            colorVariant="light"
            size="sm">Contact</Button>
        <label className="h-5 w-5 rounded-full bg-light shadow-md hidden max-sm:block" htmlFor="navbar"></label>
    </nav>;
}