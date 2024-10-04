import ChevronUpIcon from "#components/icons/chevron-up";
import { cn } from "#utils/index";
import { ReactNode } from "react";
type FaqAccordionProps = {
    title: string
    children: ReactNode,
    className?: string
}

export default function FaqAccordion({ title, children, className = "" }: FaqAccordionProps) {
    return <label className={cn(className, "grid grid-cols-[max-content_max-content] p-5 gap-5")}>
        <input type="checkbox" className="hidden peer" />
        <h3 className="font-bold text-lg">{title}</h3>
        <ChevronUpIcon className="w-fit place-self-end peer-checked:rotate-180 transition-transform" />
        <div className="grid grid-rows-[1fr] peer-checked:grid-rows-[0fr] transition-[grid-template-rows] col-span-2 min-w-0">
            <div className="bg-transparent rounded-md min-h-0 overflow-hidden box-border w-fit">
                {children}
            </div>
        </div>
    </label>;
}