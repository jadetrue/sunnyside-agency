import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

export interface Props {
    siteTitle: string;
    children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({siteTitle, children}) => {
    return (
        <div>
            <Head>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="./images/favicon-32x32.png"
                />
                <meta
                    name="description"
                    content="Sunnyside agency | Landing Page"
                />
                <Navigation />
                <title>{siteTitle}</title>
            </Head>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
