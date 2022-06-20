import Link from "next/link";
import React from "react";

export interface Props {
    href: string;
    cta?: boolean;
    children?: React.ReactNode;
}

const NavigationItem: React.FC<Props> = ({href, cta = false, children}) => {
    if (cta) {
        return (
            <Link href={href} target="_blank">
                <a className="text-[hsl(198, 62%, 26%)] font-['Barlow'] font-semibold text-lg py-2 px-5 rounded-full bg-white">
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
