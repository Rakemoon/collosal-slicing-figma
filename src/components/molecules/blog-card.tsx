import Image from "next/image";

type BlogCardProps = {
    readonly title: string;
    readonly image?: string;
    readonly summary: string;
    readonly author: {
        readonly name: string;
        readonly image?: string;
        readonly foot: string;
    }
}

export default function BlogCard ({ title, image, summary, author }: BlogCardProps) {
    return <div className="w-fit h-fit flex flex-col gap-5 max-w-56">
        <Image
            src={image ?? "/assets/placeholder.png"}
            alt="blog-image"
            width={326}
            height={220}
            className="aspect-video rounded-md"
        />
        <h3>{title}</h3>
        <p>{summary}</p>
        <div className="grid [grid-template-columns:_min-content_1fr] grid-rows-2 w-full">
            <Image
                className="[grid-column:_1_/_2] [grid-row:_1_/_3] rounded-full aspect-square min-w-14"
                src={author.image ?? "/assets/placeholder.png"}
                alt="author-image"
                width={50}
                height={50} />
            <h4 className="[grid-column:_2_/_3] [grid-row:_1_/_2]">{author.name}</h4>
            <p className="[grid-column:_2_/_3] [grid-row:_2_/_3]">{author.foot}</p>
        </div>
    </div>;
}