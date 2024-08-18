import { Button, Img, Text, Heading } from "./..";
import React from "react";

export default function UserProfile5({
  userImage = "images/img_rectangle_16643.png",
  titleText = "Developing Kids Website from Scratch",
  courseByText = "Course By:",
  instructorName = "Ravikant Rathore",
  completionPercentage = "45%",
  resumeButtonText = "Resume",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-center flex-1`}
    >
      <div className="flex flex-1">
        <Img
          src={userImage}
          alt="Image"
          className="h-[118px] w-[20%] rounded-[10px] object-contain"
        />
        <div className="flex flex-1 flex-col gap-[18px] px-6 sm:gap-[18px] sm:px-5">
          <div className="flex flex-col">
            <Heading
              size="text4xl"
              as="p"
              className="w-[88%] leading-7 !text-black-900 sm:w-full sm:text-[17px]"
            >
              {titleText}
            </Heading>
            <div>
              <div className="flex flex-wrap">
                <Text
                  as="p"
                  className="self-end !font-inter tracking-[-0.32px] !text-gray-600_02"
                >
                  {courseByText}
                </Text>
                <Text
                  as="p"
                  className="!font-inter !font-medium tracking-[-0.32px] !text-blue_gray-900"
                >
                  {instructorName}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[7px]">
            <div className="flex w-[72%] rounded border border-solid border-blue_gray-100_02 bg-gray-200">
              <div className="h-[8px] w-[48%] rounded bg-amber-a400" />
            </div>
            <Text as="p" className="tracking-[-0.32px] !text-gray-800">
              {completionPercentage}
            </Text>
          </div>
        </div>
      </div>
      <Button
        shape="round"
        rightIcon={
          <Img
            src="images/img_arrowright_gray_50_02.svg"
            alt="Arrow Right"
            className="my-0.5 h-[16px] w-[16px]"
          />
        }
        className="min-w-[114px] gap-2 self-end font-semibold text-white-a700 sm:self-auto"
      >
        {resumeButtonText}
      </Button>
    </div>
  );
}
