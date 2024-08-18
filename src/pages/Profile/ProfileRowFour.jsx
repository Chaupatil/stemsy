import { Button, Img, Heading, Text } from "../../components";
import React from "react";

export default function ProfileRowFour() {
  return (
    <div className="flex justify-center self-stretch">
      <div className="container-xs flex justify-center px-14 lg:px-5 md:px-5">
        <div className="w-full rounded-[10px] border border-solid border-blue_gray-100_02 bg-gray-50">
          <div className="mb-6 flex flex-col gap-2.5">
            <div className="flex flex-col items-start">
              <div className="flex h-[128px] items-start justify-end self-stretch rounded-tr-[10px] bg-amber-300_02 bg-[url(/public/images/img_group_41.png)] bg-cover bg-no-repeat px-9 py-7 lg:h-auto md:h-auto sm:p-4">
                <Button
                  color="white_A700"
                  size="3xl"
                  className="mb-[18px] w-[54px] rounded-[26px]"
                >
                  <Img src="images/img_icon_edit.svg" />
                </Button>
              </div>
              <Img
                src="images/img_ellipse_2_130x130.png"
                alt="Image"
                className="relative ml-[50px] mt-[-84px] h-[130px] w-[130px] rounded-[64px] object-cover md:ml-0"
              />
            </div>
            <div className="ml-[50px] mr-9 flex items-start justify-center md:mx-0 md:flex-col">
              <div className="flex flex-1 items-center justify-center gap-[30px] md:flex-col md:self-stretch">
                <div className="flex w-[36%] flex-col items-start self-start md:w-full md:self-auto">
                  <Heading
                    size="text8xl"
                    as="h1"
                    className="tracking-[-0.74px] md:text-[26px] sm:text-[24px]"
                  >
                    Amrit Shiksha Vidyalaya
                  </Heading>
                  <Heading
                    as="h2"
                    className="!  font-normal leading-[25px] tracking-[-0.41px] !text-gray-500_02"
                  >
                    <>
                      ID-ASV215487963
                      <br />
                      Email - amritshiksha@gmail.com
                    </>
                  </Heading>
                </div>
                <div className="h-[102px] w-px bg-blue_gray-100_02 md:h-px md:w-[102px]" />
                <div className="flex flex-1 flex-col items-start md:self-stretch">
                  <Text
                    size="text6xl"
                    as="p"
                    className="!font-medium tracking-[-0.55px]"
                  >
                    About Us
                  </Text>
                  <Heading
                    as="h3"
                    className="w-[82%] !font-normal leading-[25px] tracking-[-0.41px] !text-gray-800 lg:w-full md:w-full"
                  >
                    At Amrit Siksha Vidhyalaya, we foster curiosity and
                    excellence in a supportive environment, empowering students
                    to become confident, compassionate global citizens.
                  </Heading>
                </div>
              </div>
              <Button
                size="4xl"
                shape="round"
                leftIcon={
                  <Img
                    src="images/img_tabler.svg"
                    alt="Tabler"
                    className="h-[24px] w-[24px]"
                  />
                }
                className="min-w-[210px] gap-2 font-semibold text-white-a700"
              >
                Share Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
