import Link from "next/link";
import React from "react";

type Types = "footer" | "header";

export interface Props {
    href: string;
    cta?: boolean;
    type?: Types;
    children?: React.ReactNode;
}

const NavigationItem: React.FC<Props> = ({
    href,
    cta = false,
    type,
    children,
}) => {
    if (type === "footer")
        return (
            <Link href={href} target="_blank">
                <a className="text-lg text-[#25564B] hover:text-white flex items-center rounded-full ">
                    {children}
                </a>
            </Link>
        );
    if (type === "header")
        return (
            <Link href={href} target="_blank">
                <a className="font-semibold text-lg hover:text-white flex items-center rounded-full ">
                    {children}
                </a>
            </Link>
        );
    if (cta) {
        return (
            <Link href={href} target="_blank">
                <a className="text-[hsl(198, 62%, 26%)] font-['Barlow'] font-semibold text-lg px-5 py-3 hover:text-white flex items-center rounded-full bg-white hover:bg-white/20">
                    {children}
                </a>
            </Link>
        );
    }
    return (
        <Link href={href} target="_blank">
            <a className="text-white py-2 text-lg">{children}</a>
        </Link>
    );
};

export default NavigationItem;
