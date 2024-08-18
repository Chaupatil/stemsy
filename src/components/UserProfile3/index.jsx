import { Heading, Button, Img } from "./..";
import React from "react";

export default function UserProfile3({
  userImage = "images/img_rectangle_16560_206x316.png",
  coursesButton = "10 Courses",
  titleText = "Basic Coding",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[50%] md:w-full gap-2.5`}
    >
      <div className="relative h-[218px] self-stretch">
        <div className="absolute_left-0 right-0 top-0 m-auto h-[182px] w-[88%] rounded-md bg-gray-200" />
        <div className="absolute left-0 right-0 top-1.5 m-auto h-[194px] flex-1 rounded-md bg-blue_gray-100_02" />
        <div className="absolute bottom-0 left-0 right-0 m-auto h-[206px] flex-1 content-center">
          <Img
            src={userImage}
            alt="Basic Coding"
            className="mx-auto h-[206px] w-full flex-1 rounded-md object-cover"
          />
          <Button
            color="amber_A400"
            size="sm"
            leftIcon={
              <Img
                src="images/img_materialsymbolslightplaylistplayrounded.svg"
                alt="Material-symbols-light:playlist-play-rounded"
                className="my-1 h-[14px] w-[14px]"
              />
            }
            className="absolute bottom-5 right-[13px] m-auto min-w-[120px] gap-2 rounded-[14px]"
          >
            {coursesButton}
          </Button>
        </div>
      </div>
      <Heading size="text4xl" as="p" className="!text-black-900">
        {titleText}
      </Heading>
    </div>
  );
}
