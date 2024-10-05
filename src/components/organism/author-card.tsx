import FacebookIcon from "#components/icons/facebook";
import LinkedinIcon from "#components/icons/linkedin";
import TwitterIcon from "#components/icons/twitter";
import Image from "next/image";

type AuthorCardProps = {
    name: string;
    job: string;
    image?: string;
    description: string;
    links?: {
        x?: string;
        facebook?: string;
        linkedin?: string;
    }
}

function getSocialIcon(name: keyof NonNullable<AuthorCardProps["links"]>) {
    switch (name) {
        case "x": return <TwitterIcon />;
        case "facebook": return <FacebookIcon />;
        case "linkedin": return <LinkedinIcon />;
    }
}

export default function AuthorCard({ name, image, description, job, links = {} }: AuthorCardProps) {
    return <div className="rounded-md bg-light flex w-max gap-10 p-10 box-border">
        <Image
            src={image || "/assets/placeholder.png"}
            alt="author-image"
            className="w-24 h-24 rounded-full object-cover aspect-square"
            width={112}
            height={112}
        />
        <div className="flex flex-col flex-grow gap-5">
            <div className="flex justify-between">
                <div>
                    <h3 className="font-semibold text-xl">{name}</h3>
                    <h4 className="text-semibold text-xs">{job}</h4>
                </div>
                <div className="flex gap-2">
                    {Object.keys(links).map(k =>
                        <a
                            className="rounded-full bg-light aspect-square h-10 grid place-content-center"
                            href={links[k as keyof typeof links]}
                            target="_blank"
                            key={k}>
                            {getSocialIcon(k as keyof typeof links)}
                        </a>
                    )}
                </div>
            </div>
            <div className="max-w-[25rem]">
                <p className="text-base font-medium">{description}</p>
            </div>
        </div>
    </div>;
}