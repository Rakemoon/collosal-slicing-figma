import LogoName from "#components/molecules/logo-name";
import Link from "next/link";

type FooterProps = {
    list: {
        title: string;
        items: {
            name: string;
            href: string;
        }[];
    }[];
}
export default function Footer({ list }: FooterProps) {
    return <footer className="grid grid-cols-12 gap-10 w-full h-fit text-white text-opacity-60">
        <div className="col-span-3">
            <LogoName />
            <p className="mt-5">Copyright &copy; 2021</p>
            <p>Design By Collosal LLC</p>
        </div>
        {
            list.map(x => <ul key={x.title} className="col-span-3 text-base">
                <h4 className="text-sm font-semibold mb-5 text-white">{x.title}</h4>
                {
                    x.items.map(x => <li key={x.name}><Link href={x.href} className="font-light hover:text-white transition-colors">{x.name}</Link></li>)
                }
            </ul>
            )
        }
    </footer>
}