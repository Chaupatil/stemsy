import { Heading, Img } from "./..";
import React from "react";

export default function IntroductionRow({
  introductionText = "Introduction",
  timeText = "7:34",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center gap-[30px] p-[18px] flex-1 rounded-[10px]`}
    >
      <div className="flex flex-1 gap-[23px]">
        <Img
          src="images/img_clock.svg"
          alt="Introduction"
          className="h-[28px] w-[28px]"
        />
        <Heading as="p" className="tracking-[-0.41px]">
          {introductionText}
        </Heading>
      </div>
      <Heading as="p" className="tracking-[-0.41px">
        {timeText}
      </Heading>
    </div>
  );
}
