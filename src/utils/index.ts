import { differenceInCalendarDays, format, formatDistance } from "date-fns";

export function cn(...args: string[]) {
    return args.filter(Boolean).join(" ");
}

export function formatRelativeTime(date: Date) {
    const now = new Date();
    const diff = differenceInCalendarDays(now, date);
    switch(true) {
        case diff < 7: return formatDistance(date, now, { addSuffix: true});
        default: return format(date, "MMM d, yyyy");
    }
}