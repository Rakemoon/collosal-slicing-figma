import { ReactNode } from "react"

type FeatureCardProps = {
    readonly icon: ReactNode,
    readonly title: string,
    readonly children: ReactNode,
}
export default function FeatureCard({ icon, title, children}: FeatureCardProps) {
    return <article className="flex flex-col gap-5 bg-light p-10 rounded-md">
        {icon}
        <h2 className="mt-2 font-bold text-base">{title}</h2>
        <p className="flex-grow">
            {children}
        </p>
    </article>;
}