import Link from "next/link";
import React from "react";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
    return (
        <div className="flex flex-row w-full z-10 p-10">
            <div className="w-full flex m-auto">
                <h2 className="text-white font-bold text-5xl">sunnyside</h2>
            </div>
            <div className="flex flex-row gap-12 justify-end w-full m-auto z-10">
                <NavigationItem href="/about">About</NavigationItem>
                <NavigationItem href="/services">Services</NavigationItem>
                <NavigationItem href="/projects">Projects</NavigationItem>
                <NavigationItem href="/contact" cta>
                    CONTACT
                </NavigationItem>
            </div>
        </div>
    );
};

export default Navigation;
