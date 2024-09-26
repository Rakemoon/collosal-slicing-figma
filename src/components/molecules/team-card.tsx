import Image from "next/image";

type TeamCardProps = {
    readonly name: string;
    readonly job: string;
    readonly image?: string;
};

export default function TeamCard({ image, name, job }: TeamCardProps) {
    return <div className="flex flex-col gap-5 bg-carddark w-fit h-fit rounded-md overflow-hidden">
        <Image
            src={image ?? "/assets/placeholder.png"}
            alt="team-image"
            width={328}
            height={328}
            className="aspect-square w-56 h-56 object-cover"/>
            <div className="px-5 pb-5 flex flex-col gap-5">
                <h3 className="bold text-lg">{name}</h3>
                <p className="text-white text-opacity-60 text-xs">{job}</p>
            </div>
    </div>
}