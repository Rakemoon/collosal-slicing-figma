import { formatRelativeTime } from "#utils/index";
import Image from "next/image";

type CommentProps = {
    image?: string;
    name: string;
    date: Date;
    content: string;
}

export default function Comment({ image, name, date, content }: CommentProps) {
    return <div className="flex w-max gap-5">
        <Image
            className="rounded-full w-12 h-12 aspect-square object-cover"
            src={image ?? "/assets/placeholder.png"}
            alt="author-image"
            width={50}
            height={50}
        />
        <div className="flex flex-col gap-5">
            <div>
                <h3 className="font-semibold text-xl">{name}</h3>
                <h4 className="text-white text-opacity-60 text-sm font-normal">{formatRelativeTime(date)}</h4>
            </div>
            <div className="max-w-[36rem]">
                <p className="text-base font-medium">{content}</p>
            </div>
        </div>
    </div>;
}