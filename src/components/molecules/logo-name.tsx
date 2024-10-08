import Logo from "#components/atoms/logo";
import Link from "next/link";

export default function LogoName() {
    return <Link className="flex gap-4 items-center cursor-pointer" href="/">
        <Logo />
        <span className="text-2xl font-bold text-white">
            Collosal.
        </span>
    </Link>
}