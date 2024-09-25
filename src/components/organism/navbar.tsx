import Button from "#components/atoms/button";
import LogoName from "#components/molecules/logo-name";
import { cn } from "#utils/index";

type NavbarProps = {
    variant?: "naked" | "highlight"
};
export default function Navbar({ variant }: NavbarProps) {
    return <nav className={
        cn(
            "flex justify-between items-center gap-5 w-full",
            variant === "highlight" ? "bg-light py-4 px-10 rounded-md" : ""
        )
    }>
        <LogoName />
        <ul className="flex gap-20 items-end">
            <li>Services</li>
            <li>How We Work</li>
            <li>Projects</li>
            <li>About</li>
        </ul>
        <Button
            className="shadow-md"
            colorScheme="white"
            colorVariant="light"
            size="sm">Contact</Button>
    </nav>;
}