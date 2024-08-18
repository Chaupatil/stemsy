import { Heading } from "./..";
import React from "react";

export default function UserProfile4({
  userTitle,
  userAbout = "About Assessment",
  userDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Pagemaker including versions of Lorem Ipsum.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full gap-2 px-7 py-[30px] sm:p-4 rounded-[10px]`}
    >
      <Heading
        size="heading3xl"
        as="h1"
        className="ml-2 !text-[37.14px] leading-[45px] tracking-[-0.85px] !text-white-a700 sm:ml-0 sm:!text-[31px]"
      >
        <span className="text-amber-300_02">Invent</span>
        <span className="text-white-a700">
          <>
            &nbsp; an automated tool
            <br />
          </>
        </span>
        <span className="text-amber-300_02">to grow food indoors</span>
      </Heading>
      <Heading
        size="text4xl"
        as="p"
        className="ml-2 tracking-[-0.46px] !text-white-a700 sm:ml-0 sm:text-[17px]"
      >
        {userAbout}
      </Heading>
      <Heading
        size="textmd"
        as="p"
        className="mb-[38px] ml -2 w-full !text-[12.86px] !font-normal leading-[17px] tracking-[-0.30px] !text-blue-50_02 sm:ml-0 sm:w-full"
      >
        {userDescription}
      </Heading>
    </div>
  );
}
