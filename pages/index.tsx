import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";

const index = () => {
    return (
        <Layout siteTitle="Home">
            <div className="w-full">
                <Image
                    src="/images/desktop/image-header.jpg"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    className="-z-10"
                />
            </div>
        </Layout>
    );
};

export default index;
