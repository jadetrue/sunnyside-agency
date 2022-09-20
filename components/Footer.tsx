import React from "react";
import NavigationItem from "./NavigationItem";

const Footer = () => {
    return (
        <div className="bg-[#458c7e] w-full text-center p-20">
            <h2 className="font-bold text-5xl text-[#25564B]">sunnyside</h2>
            <div className="flex gap-5 justify-center mt-8 text-[#25564B]">
                <NavigationItem type="footer" href="/about">
                    About
                </NavigationItem>
                <NavigationItem type="footer" href="/services">
                    Services
                </NavigationItem>
                <NavigationItem type="footer" href="/projects">
                    Projects
                </NavigationItem>
            </div>
            <div className="w-full flex flex-row justify-center gap-6 mt-20">
                <a href="#">
                    <img
                        src="./images/icon-facebook.svg"
                        className="hover:fill-white"
                    />
                </a>
                <img src="./images/icon-instagram.svg" />
                <img src="./images/icon-twitter.svg" />
                <img src="./images/icon-pinterest.svg" />
            </div>
        </div>
    );
};

export default Footer;
