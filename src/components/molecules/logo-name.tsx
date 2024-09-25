import Logo from "#components/atoms/logo";

export default function LogoName() {
    return <div className="flex gap-4 items-center">
        <Logo />
        <span className="text-2xl font-bold">
            Collosal.
        </span>
    </div>
}