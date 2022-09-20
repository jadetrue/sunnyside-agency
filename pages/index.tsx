import React from "react";
import Layout from "../components/layout";
import Image from "next/image";

const index = () => {
    return (
        <Layout siteTitle="Home">
            <div className="h-screen">
                <div className="w-full mt-32 relative z-10">
                    <h1 className="text-white text-6xl flex justify-center w-full">
                        WE ARE CREATIVES
                    </h1>
                    <div className="w-full flex justify-center">
                        <img
                            src="./images/icon-arrow-down.svg"
                            className="mt-24"
                        />
                    </div>
                </div>
                <div className="w-full absolute top-0">
                    <img
                        src="/images/desktop/image-header.jpg"
                        alt="Picture of the author"
                        className="-z-10"
                    />
                </div>
            </div>
            <div className="bg-blue-200">content here</div>
        </Layout>
    );
};

export default index;
