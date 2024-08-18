import { Text } from "./..";
import React from "react";

export default function TextFrames({
  textO = "0",
  textFrame = "_",
  textFrameOne = "_",
  textR = "R",
  textFrameTwo = "_",
  textT = "T",
  textFrameThree = "_",
  textN = "N",
  textFrameFour = "_",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center gap-0.5 flex-1 flex-wrap`}
    >
      <Text
        size="text6xl"
        as="p"
        className="flex h-[28px] w-[28px] items-center justify-center rounded-[3px] bg-white-a700 text-center !text-[24.62px] tracking-[-0.57px] !text-black-900"
      >
        {textO}
      </Text>
      <Text
        size="text6xl"
        as="p"
        className="flex h-[28px] w-[28px] items-center justify-center rounded-[3px] bg-white-a700 text-center !text-[24.62px] tracking-[-0.57px] !text-black-900"
      >
        {textFrame}
      </Text>
      <Text
        size="text6xl"
        as="p"
        className="flex h-[28px] w-[28px] items-center justify-center rounded-[3px] bg-white-a700 text-center !text-[24.62px] tracking-[-0.57px] !text-black-900"
      >
        {textFrameOne}
      </Text>
      <Text
        size="text6xl"
        as="p"
        className="flex h-[28px] w-[28px] items-center justify-center rounded-[3px] bg-white-a700 text-center !text-[24.62px] tracking-[-0.57px] !text-black-900"
      >
        {textR}
      </Text>
      <Text
        size="text6xl"
        as="p"
        className="flex h-[28px] w-[28px] items-center justify-center rounded-[3px] bg-white-a700 text-center !text-[24.62px] tracking-[-0.57px] !text-black-900"
      >
        {textFrameTwo}
      </Text>
      <Text
        size="text6xl"
        as="p"
        className="flex h-[28px] w-[28px] items-center justify-center rounded-[3px] bg-white-a700 text-center !text-[24.62px] tracking-[-0.57px] !text-black-900"
      >
        {textT}
      </Text>
      <Text
        size="text6xl"
        as="p"
        className="flex h-[28px] w-[28px] items-center justify-center rounded-[3px] bg-white-a700 text-center !text-[24.62px] tracking-[-0.57px] !text-black-900"
      >
        {textFrameThree}
      </Text>
      <Text
        size="text6xl"
        as="p"
        className="flex h-[28px] w-[28px] items-center justify-center rounded-[3px] bg-white-a700 text-center !text-[24.62px] tracking-[-0.57px] !text-black-900"
      >
        {textN}
      </Text>
      <Text
        size="text6xl"
        as="p"
        className="flex h-[28px] w-[28px] items-center justify-center rounded-[3px] bg-white-a700 text-center !text-[24.62px] tracking-[-0.57px] !text-black-900"
      >
        {textFrameFour}
      </Text>
    </div>
  );
}
