import { Text, Img, Heading } from "../../components";
import React from "react";

export default function Home1RowThirteen() {
  return (
    <div className="mt-[26px] px-[50px] md:px-5 sm:px-4">
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between gap-5">
          <Img
            src="images/img_group.svg"
            alt="Image"
            className="h-[56px] w-[14%] object-contain"
          />
          <div className="flex w-[72%] flex-col items-start">
            <Heading
              size="headingxl"
              as="h2"
              className="tracking-[-0.69px] !text-gray-800 md:text-[24px] sm:text-[22px]"
            >
              1 day streak
            </Heading>
            <Heading
              as="h3"
              className="!font-normal tracking-[-0.41px] !text-gray-800"
            >
              Way to go!
            </Heading>
          </div>
        </div>
        <div className="ml-1 flex gap-5 md:ml-0">
          <div className="flex w-full flex-col items-center">
            <img
              src="images/img_checkmark.svg"
              alt="Checkmark"
              className="h-[20px] w-full lg:h-auto md:h-auto"
            />
            <Text
              size="texts"
              as="p"
              className="!text-[11.76px] tracking-[-0.27px] !text-blue-800"
            >
              M
            </Text>
          </div>
          <div className="flex w-full flex-col items-center">
            <Img
              src="images/img_checkmark.svg"
              alt="Checkmark"
              className="h-[20px] w-full lg:h-auto md:h-auto"
            />
            <Text
              size="texts"
              as="p"
              className="!text-[11.76px] tracking-[-0.27px] !text-blue-800"
            >
              T
            </Text>
          </div>
          <div className="flex w-full flex-col items-center">
            <Img
              src="images/img_checkmark.svg"
              alt="Checkmark"
              className="h-[20px] w-full lg:h-auto md:h-auto"
            />
            <Text
              size="texts"
              as="p"
              className="!text-[11.76px] tracking-[-0.27px] !text-blue-800"
            >
              W
            </Text>
          </div>
          <div className="flex w-full flex-col items-center">
            <Text
              size="textxs"
              as="p"
              className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-gray-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
            >
              23
            </Text>
            <Text
              size="texts"
              as="p"
              className="!text-[11.76px] tracking-[-0.27px] !text-blue-800"
            >
              T
            </Text>{" "}
          </div>
          <div className="flex w-full flex-col items-start">
            <Text
              size="textxs"
              as="p"
              className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-blue-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
            >
              24
            </Text>
            <Text
              size="texts"
              as="p"
              className="ml-1.5 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:ml-0"
            >
              F
            </Text>
          </div>
          <div className="flex w-full flex-col items-center">
            <Text
              size="textxs"
              as="p"
              className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-blue-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
            >
              25
            </Text>
            <Text
              size="texts"
              as="p"
              className="!text-[11.76px] tracking-[-0.27px] !text-blue-800"
            >
              S
            </Text>
          </div>
          <div className="flex w-full flex-col items-start">
            <Text
              size="textxs"
              as="p"
              className="flex h-[20px] w-[20px] items-center justify-center self-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-blue-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
            >
              26
            </Text>
            <Text
              size="texts"
              as="p"
              className="ml-1.5 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:ml-0"
            >
              S
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
