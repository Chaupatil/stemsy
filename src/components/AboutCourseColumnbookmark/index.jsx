import { Text, Img, Heading, Button } from "./..";
import React from "react";

export default function AboutCourseColumnbookmark({ ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-4 p-5 border-black-900_4c border border-solid bg-white-a700 rounded-[12px]`}
    >
      <div className="relative h-[242px] content-center self-stretch">
        <Img
          src="images/img_rectangle_16560_3.png"
          alt="Image"
          className="mx-auto h-[242px] w-full flex-1 rounded-md object-cover"
        />
        <Button
          color="white_A700"
          size="md"
          shape="circle"
          className="absolute right-3 top-3 m-auto w-[32px] !rounded-[16px]"
        >
          <Img src="images/img_bookmark.svg" />
        </Button>
      </div>
      <div className="mb-1.5 flex flex-col gap-2.5 self-stretch">
        <Heading
          size="text4xl"
          as="p"
          className="w-[90%] leading-7 !text-black-900"
        >
          Developing Kids Website from Scratch
        </Heading>
        <div className="flex flex-wrap">
          <Text
            as="p"
            className="self-end !font-inter tracking-[-0.32px] !text-gray-600_02"
          >
            Course By:
          </Text>
          <Text
            as="p"
            className="!font-inter !font-medium tracking-[-0.32px] !text-blue_gray-900"
          >
            Ravikant Rathore
          </Text>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex flex-1 items-center">
            <Img
              src="images/img_carbon_time_filled.svg"
              alt="7 Hrs"
              className="h-[16px] w-[16px]"
            />
            <Text as="p">7 Hrs</Text>
            <div className="flex flex-1 items-center px-3.5">
              <Img
                src="images/img_uis_calender.svg"
                alt="7 Modules"
                className="h-[16px] w-[16px]"
              />
              <Text as="p">7 Modules</Text>
            </div>
          </div>
          <div className="flex items-center">
            <Img
              src="images/img_signal.svg"
              alt="Image"
              className="h-[16px] w-[16px]"
            />
            <Text as="p">4.3</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
