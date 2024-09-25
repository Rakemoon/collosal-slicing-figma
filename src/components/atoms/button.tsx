import { cn } from "#utils/index";
import { forwardRef, MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  readonly className?: string;
  readonly children?: ReactNode;
  readonly type?: "button" | "submit" | "reset";
  readonly colorScheme?: "primary" | "white";
  readonly rounded?: boolean;
  readonly colorVariant?: "solid" | "light" | "outline";
  readonly size?: "md" | "sm";
  readonly onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    function Button({ rounded, colorScheme, colorVariant, size, ...props }, ref) {
        let foreground = "text-muted", background;

        switch(colorVariant) {
            case "outline":
                if (colorScheme === "white") {
                    background = "border-muted";
                } else {
                    foreground = "text-primary";
                    background = "border-primary";
                }
                break;
            case "light": background = colorScheme === "white" ? "bg-light" : "bg-primarylight"; break;
            default:
                if (colorScheme === "white") {
                    background = "bg-muted";
                    foreground = "text-dark";
                } else {
                    background = "bg-primary";
                }
                break;
        }

        return <button
            {...props}
            ref={ref}
            className={
                cn(
                    "font-semibold inline",
                    foreground,
                    background,
                    size === "sm" ? "text-xs px-8 py-3" : "text-base px-14 py-4" ,
                    colorVariant === "outline" ? "border-2" : "",
                    rounded ? "rounded-full": "rounded-md",
                    props.className ?? "",
                )
            }
        />;
    }
);

export default Button;
