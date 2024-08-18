import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile({
  userImage = "images/img_ion_flag_outline.svg",
  gettingStartedText = "Getting Started",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-[24%] md:w-full gap-2.5 p-3.5 border-gray-200 border border-solid bg-gray-50 rounded-lg`}
    >
      <div className="flex rounded-lg bg-gray-200 p-3">
        <Img src={userImage} alt="Image" className="h-[36px] w-[36px]" />
      </div>
      <Heading size="textxl" as="p" className="tracking-[-0.37px]">
        {gettingStartedText}
      </Heading>
    </div>
  );
}
