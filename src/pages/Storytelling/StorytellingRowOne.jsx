import { Img, Heading } from "../../components";
import React from "react";

export default function StorytellingRowOne() {
  return (
    <div className="flex justify-center px-14 md:px-5 sm:px-4">
      <div className="flex w-[88%] items-start justify-center lg:w-full md:w-full md:flex-col">
        <div className="mb-[62px] flex flex-1 flex-col items-end gap-1 px-10 md:self-stretch sm:px-4">
          <div className="flex items-center justify-end self-stretch md:flex-col">
            <Img
              src="images/img_vector_indigo_50.svg"
              alt="Vector"
              className="h-[106px] w-[24%] object-contain md:w-full"
            />
            <div className="mb-1.5 flex flex-1 items-center gap-[18px] self-end pl-[230px] pr-14 lg:pl-8 md:self-stretch md:px-5 sm:flex-col sm:self-auto sm:px-4">
              <Img
                src="images/img_message_bot.png"
                alt="Messagebot"
                className="h-[62px] w-[62px] object-cover sm:w-full"
              />
              <Heading
                size="heading6xl"
                as="h1"
                className="md:text-[32px] sm:text-[26px]"
              >
                Storytelling
              </Heading>
            </div>
          </div>
          <Heading
            size="text4xl"
            as="h2"
            className="mr-[378px] w-[48% ] text-center !font-normal leading-[30px] !text-gray-800 lg:w-full md:mr-0 md:w-full"
          >
            &quot;Always On, Always Helpful: Your AI Companion for Instant
            Answers and Assistance.&quot;
          </Heading>
        </div>
        <Img
          src="images/img_group_indigo_100.svg"
          alt="Image"
          className="h-[158px] w-[8%] self-end object-contain md:w-full md:self-auto"
        />
      </div>
    </div>
  );
}
