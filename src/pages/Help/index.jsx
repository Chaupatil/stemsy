import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HelpColumn from "./HelpColumn";
import HelpColumnOne from "./HelpColumnOne";
import React from "react";

export default function HelpPage() {
  return (
    <>
      <Helmet>
        <title>Help</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-gray-50">
        <Header className="relative z-[1] self-stretch" />
        <div className="relative z-[2] mt-[-2px] flex justify-center self-stretch bg-amber-300_02">
          <div className="container-xs mt-1.5 flex justify-center px-14 lg:px-5 md:px-5">
            <Heading
              size="text7xl"
              as="h1"
              className="capitalize md:text-[22px]"
            >
              Help
            </Heading>
          </div>
        </div>
        <HelpColumn />
        <HelpColumnOne />
        <div className="container-xs mt-[66px] px-14 lg:px-5 md:px-5">
          <Footer />
        </div>
      </div>
    </>
  );
}
