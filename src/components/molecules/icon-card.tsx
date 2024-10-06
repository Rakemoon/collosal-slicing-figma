import { cn } from "#utils/index";
import { ReactNode } from "react";

type ListIconProps = {
    icon: ReactNode;
    keyVal?: string;
    value: string;
    className?: string;
}
export function ListIcon({ icon, keyVal, value, className = "" }: ListIconProps) {
    return <div className={
        cn(
            "flex gap-5 w-max",
            className
        )
    }>
        <div className={
            cn(
                "bg-light aspect-square grid place-content-center",
                keyVal ? "w-16 h-16" : "w-12 h-12"
            )
        }>
            {icon}
        </div>
        <div className="flex flex-col justify-center">
            {keyVal && <h3 className="text-base font-medium text-white text-opacity-60">{keyVal}</h3>}
            <h4 className={
                cn(
                    "text-white",
                    keyVal ? "text-xl font-bold" : "text-base font-medium"
                )
            }>{value}</h4>
        </div>
    </div>
}

type CardListIconProps = {
    icon: ReactNode;
    className?: string;
    cardName: string;
    description?: string;
}


export function CardListIcon({ className = "", icon, cardName, description }: CardListIconProps) {
    return <div className={
        cn(
            "flex flex-col gap-2.5 bg-light border-white border-opacity-10 border rounded-md w-max",
            description ? "p-5" : "px-5 py-2.5",
            className
        )
    }>
        <div className="flex justify-between gap-2.5 items-center">
            <div className="h-7 w-7 aspect-square grid place-content-center">
                {icon}
            </div>
            <div>
                <h3 className="text-base font-semibold">{cardName}</h3>
            </div>
        </div>
        {description && <p className="text-sm font-normal text-white text-opacity-60 p-0">{description}</p>}
    </div>
}