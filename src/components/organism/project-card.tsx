import Button from "#components/atoms/button";
import { cn } from "#utils/index";
import Image from "next/image";

type ProjectCardProps = {
    title: string;
    description: string;
    detail: string;
    className?: string;
    image?: string;
}
export default function ProjectCard({ title, description, detail, className = "", image}: ProjectCardProps) {
    return <div className={
        cn(
            "flex flex-col gap-5 items-center",
            className
        )
    }>
        <div className="w-[31.375rem] h-[27.563rem] bg-carddark border border-white border-opacity-10 rounded-md">
            <Image
                src={image ?? "/assets/placeholder.png"}
                alt="project-image"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-md"
            />
        </div>
        <p className="text-xl font-bold">{title}</p>
        <p className="text-base font-normal text-white text-opacity-60">{description}</p>
        <Button colorScheme="white" colorVariant="outline" className="w-fit" size="sm">{detail}</Button>
    </div>;
}