import { Button, Img, Heading } from "../../components";
import React from "react";

export default function AboutcourseRowOne() {
  return (
    <div className="flex justify-center">
      <div
        className="container-xs
       flex items-center justify-center lg:px-5 md:flex-col md:px-5"
      >
        <a href="https://www.youtube.com/" target="_blank">
          <div className="relative h-[328px] w-[38%] content-center lg:h-auto md:h-auto md:w-full">
            <Img
              src="images/img_rectangle_16560.png"
              alt="Image"
              className="h-[100%] w-[100%] rounded-md object-contain"
            />
            <div className="absolute bottom-0 left-0 top-> my-auto mr-[84px] flex h-max flex-1 justify-center rounded-md bg-black-900_7f px-14 py-[120px] lg:mr-0 lg:py-8 md:mr-0 md:p-5 sm:p-4">
              <Button
                size="7xl"
                shape="square"
                className="w-[84px] bg-transparent"
              >
                <Img src="images/img_vector.svg" />
              </Button>
            </div>
          </div>
        </a>
        <div className="flex flex-1 flex-col items-start md:self-stretch">
          <Heading
            size="heading5xl"
            as="h1"
            className="tracking-[-0.92px] !text-white-a700 md:text-[34px] sm:text-[32px]"
          >
            Developing Kids Website from Scratch
          </Heading>
          <div className="flex items-center gap-2.5 self-stretch">
            <Img
              src="images/img_ellipse_3.png"
              alt="Image"
              className="h-[38px] w-[38px] rounded-[18px] object-cover"
            />
            <Heading
              as="h2"
              className="self-end tracking-[-0.41px] !text-white-a700"
            >
              <span>Laxmi Pandit,&nbsp;</span>
              <span className="font-normal">Developer, Designer</span>
            </Heading>
          </div>
          <div className="mt-[54px] flex gap-5 self-stretch">
            <Button
              color="amber_300_02"
              size="4xl"
              shape="round"
              className="min-w-[210px] font-semibold"
            >
              Go to Course
            </Button>
            <Button
              color="white_A700"
              size="4xl"
              variant="outline"
              shape="round"
              leftIcon={
                <Img
                  src="images/img_bookmark_white_a700.svg"
                  alt="Bookmark"
                  className="h-[24px] w-[24px]"
                />
              }
              className="min-w-[210px] gap-2 font-semibold"
            >
              Save in Library
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
