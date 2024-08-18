import { Heading, Img } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col mr-3.5 pl-[324px] pr-14 gap-[26px] py-10 lg:pl-8 md:mr-0 md:px-5 sm:p-4 rounded-t1-[10px] rounded-tr-[10px] bg-blue-800`}
    >
      <div className="flex w-[60%] flex-col items-center gap-3 self-center">
        <Heading
          size="headinglg"
          as="h4"
          className="tracking-[-0.55px] !text-gray-50"
        >
          You Still have a question?
        </Heading>
        <Heading
          size="textxl"
          as="p"
          className="self-stretch text-center !font-normal leading-6 tracking-[-0.37px] !text-gray-50"
        >
          If you can't find answer to your question. fill your query & submit
          it, or can alwqys contact us. We answer to you shortly.
        </Heading>
      </div>
      <div className="mr-[58px] flex w-[72%] gap-16 md:mr-0 md:flex-col">
        <div className="flex w-[52%] flex-col items-center rounded-[10px] bg-gray-50 p-[18px] md:w-full">
          <Img
            src="images/img_tdesign_call_1.svg"
            alt="Image"
            className="h-[36px] w-[36px]"
          />
          <Heading size="textmd" as="p" className="mt-1.5 tracking-[-0.28px]">
            +(91)123 456 789
          </Heading>
          <Heading
            size="textmd"
            as="p"
            className="my-3.5 !font-normal tracking-[-0.28px]"
          >
            We are always happy to help.
          </Heading>
        </div>
        <div className="flex w-[48%] flex-col items-center gap-2.5 rounded-[10px] bg-gray-50 p-[18px] md:w-full">
          <Img
            src="images/img_material_symbols_mail_outline.svg"
            alt="Material"
            className="h-[36px] w-[36px]"
          />
          <Heading size="textmd" as="p" className="tracking-[-0.28px]">
            support@helpcentre.com
          </Heading>
          <Heading
            size="textmd"
            as="p"
            className="mb-3.5 !font-normal tracking-[-0.28px]"
          >
            The best way to get answer faster.
          </Heading>
        </div>
      </div>
    </footer>
  );
}
