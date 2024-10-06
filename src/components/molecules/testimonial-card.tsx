import Image from "next/image";
import { ReactNode } from "react";

type TestimonialCardProps = {
    image?: string,
    name: string,
    company: string,
    children: ReactNode,
}

export default function TestimonialCard ({ children, image, name, company }: TestimonialCardProps) {
    return <article className="flex flex-col justify-center items-center bg-carddark rounded-md w-fit h-fit p-5 group hover:-translate-y-5 transition-transform hover:border border-primary">
        <div className="relative mb-5">
            <Image
                src={image ?? "/assets/placeholder.png"}
                alt="Testimonial Image"
                width={90}
                height={90}
                className="rounded-full aspect-square w-20 h-20 object-cover"
            />
            <div className="rounded-full border-carddark bg-primary absolute bottom-0 right-0 border-4 aspect-square w-6 h-6 grid place-content-center">
                <span>{'"'}</span>
            </div>
        </div>
        <h3 className="font-bold text-lg">{name}</h3>
        <h4 className="text-sm text-opacity-60 text-white">{company}</h4>
        <p className="text-center text-opacity-60 text-white min-h-20 text-base mt-5 group-hover:text-opacity-100 transition-colors">
            {children}
        </p>
    </article>;
}