import { Text, Img, Heading } from "../../components";
import React from "react";

export default function HomeoneRowwaytogo() {
  return (
    <div className="mt-2 px-[50px] md:px-5 sm:px-4">
      <div className="flex flex-col items-start">
        <div className="flex items-start justify-between gap-5 self-stretch">
          <Img
            src="images/img_group_yellow_800.svg"
            alt="Image"
            className="mb-2.5 h-[48px]"
          />
          <Heading
            size="headingxl"
            as="h2"
            className="mr-2 self-end tracking-[-0.69px] !text-gray-800 md:text-[24px] sm:text-[22px]"
          >
            16 day streak
          </Heading>
        </div>
        <Heading
          as="h3"
          className="ml-20 !font-normal tracking-[-0.41px] !text-gray-800 md:ml-0"
        >
          Way to go !
        </Heading>
        <div className="m1-2.5 mt-10 flex gap-5 self-stretch md:ml-0">
          <div className="flex w-full flex-col items-center">
            <Img
              src="images/img_checkmark.svg"
              alt="Checkmark"
              className="h-[20px] w-full lg:h-auto md:h-auto"
            />
            <Text
              size="texts"
              as="p"
              className="text-[11.76px] tracking-[-0.27px] !text-blue-800"
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
              className="text-[11.76px] tracking-[-0.27px] !text-blue-800"
            >
              T
            </Text>
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
              className="ml-1.5 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:m1-0"
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
              className="text-[11.76px] tracking-[-0.27px] !text-blue-800"
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
              className="ml-1.5 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:m1-0"
            >
              S
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
