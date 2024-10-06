import Button from "#components/atoms/button";
import { cn } from "#utils/index";

type PricingCardProps = {
    name?: string;
    price?: number;
    features?: string[];
    className?: string;
};

export default function PricingCard({
    name = "Pricing Name",
    price = 1_200,
    features = Array.from({ length: 4 }, (_, i) => `Feature ${i + 1}`),
    className = "bg-rose-500"
}: PricingCardProps) {
    return <section className={
        cn(
            "rounded-md p-5",
            "flex flex-col gap-10",
            className,
        )
    }>
        <header className="flex gap-5 pb-8 border-white border-b-2 border-opacity-10">
            <h3 className="font-bold">{name}</h3>
            <div className="flex flex-col">
                <p className="text-xs">Starting From</p>
                <p className="text-4xl font-bold">{price}$</p>
            </div>
        </header>
        <article>
            <ul className="mx-auto w-fit flex flex-col gap-2 text-center">
                {features.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
        </article>
        <footer>
            <Button className="w-full mix-blend-lighten" colorScheme="white">Detail</Button>
        </footer>
    </section>;
}