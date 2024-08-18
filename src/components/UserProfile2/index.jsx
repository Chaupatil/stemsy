import { Button, Text, Img } from "./..";
import React from "react";

export default function UserProfile2({
  userImage = "images/img_rectangle_16578.png",
  descriptionText = "Developing Kids Website from Scratch",
  timeRemainingText,
  modulesRemainingText,
  goToCourseButton = "Go to course",
  removeFromProgressButton = "Remove from progress",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-start w-[50%] md:w-full gap-7 p-4 border-blue_gray-100_02 border border-solid rounded-[10px]`}
    >
      <div className="relative h-[208px] w-[46%] content-center self-center sm:h-auto">
        <Img
          src={userImage}
          alt="Image"
          className="mx-auto h-[288px] w-full flex-1 rounded-md object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[208px] flex-1 content-center sm:h-auto">
          <Img
            src="images/img_rectangle_16560.png"
            alt="Image"
            className="mx-auto h-[208px] w-full flex-1 rounded-md object-cover"
          />
          <div className="absolute bottom-2.5 left-0 right-0 my-auto ml-2.5 mr-3 flex flex-1 rounded border border-solid border-blue_gray-100_02 bg-gray-200 sm:mx-0">
            <div className="h-[8px] w-[48%] rounded bg-amber-a400" />
          </div>
        </div>
      </div>
      <div className="mt-2.5 flex flex-1 flex-col">
        <Text
          size="text6xl"
          as="p"
          className="w-[86%] !font-medium leading-[34px] tracking-[-0.55px] sm:w-full sm:text-[20px]"
        >
          {descriptionText}
        </Text>
        <div className="mt-3.5 flex gap-1">
          <div className="flex items-start gap-1">
            <Img
              src="images/img_carbon_time_filled.svg"
              alt="2 Hrs Remaining"
              className="h-[16px] w-[16px]"
            />
            <Text as="p" className="self-center">
              <span className="text-gray-900">2 Hrs&nbsp;</span>
              <span className="text-gray-700">Remaining</span>
            </Text>
          </div>
          <div className="flex flex-1 items-start px-1">
            <Img
              src="images/img_uis_calender.svg"
              alt="4 Modules"
              className="h-[16px] w-[16px]"
            />
            <Text as="p" className="self-center">
              <span className="text-gray-900">4 Modules&nbsp;</span>
              <span className="text-gray-700">Remaining</span>
            </Text>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <Button
            shape="round"
            className="min-w-[122px] font-medium text-white-a700"
          >
            {goToCourseButton}
          </Button>
          <Button
            color="white_A700"
            shape="round"
            className="min-w-[196px] border border-solid border-red-600 font-medium !text-gray-700"
          >
            {removeFromProgressButton}
          </Button>
        </div>
      </div>
    </div>
  );
}
