import { Heading, Button, Img } from "./..";
import React from "react";

export default function UserProfile6({
  introductionText = "Introduction",
  timeText = "7:34",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center p-[18px] bg-white-a700 flex-1 rounded-[16px] container-xs`}
    >
      <div className="flex flex-1 gap-[23px]">
        <Button size="xs" shape="square" className="w-[35px] bg-transparent">
          <Img src="images/img_vector_blue_800.svg" />
        </Button>
        <Heading as="p" className="tracking-[-0.41px]">
          {introductionText}
        </Heading>
      </div>
      <Heading as="p" className="tracking-[-0.41px]">
        {timeText}
      </Heading>
    </div>
  );
}
