import { Helmet } from "react-helmet";
import {
  Img,
  Text,
  Button,
  BreadcrumbLink,
  Breadcrumb,
  BreadcrumbItem,
  Heading,
} from "../../components";
import Header from "../../components/Header";
import IntroductionRow from "../../components/IntroductionRow";
import React, { Suspense } from "react";

const data = [
  { introductionText: "Introduction", timeText: "7:34" },
  { introductionText: "Introduction", timeText: "7:34" },
  { introductionText: "Introduction", timeText: "7:34" },
  { introductionText: "Introduction", timeText: "7:34" },
];

export default function VideoPage() {
  return (
    <>
      <Helmet>
        <title>Video</title>
        <meta
          name="description"
          content="web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[18px] bg-gray-50_02">
        <div className="self-stretch">
          <Header />
          <div className="h-[60px] bg-amber-300_02" />
        </div>
        <div className="mx-auto mb-1 flex w-full max-w-[1842px] self-stretch lg:px-5 md:px-5">
          <div className="flex w-full items-start gap-[38px] md:flex-col">
            <div className="flex w-[22%] flex-col items-start gap-2 md:w-full">
              <Heading
                size="text8xl"
                as="h1"
                className="tracking-[-0.74px] md:text-[26px] sm:text-[24px]"
              >
                Lessons in This Class
              </Heading>
              <div className="flex flex-col gap-2 self-stretch">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <IntroductionRow
                      {...d}
                      key={"video" + index}
                      className="bg-blue-50"
                    />
                  ))}
                </Suspense>
              </div>
            </div>
            <div className="mt-2.5 flex flex-1 flex-col gap-3 self-center md:self-stretch">
              <Breadcrumb
                separator={
                  <Text className="h-[40px] w-[20px] text-[24px] font-normal tracking-[-0.55px] !text-colors lg:text-[20px]">
                    &gt;
                  </Text>
                }
                className="flex flex-wrap gap-[152px] l:gap-5 md:gap-5"
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <Text size="text6xl" as="p" className="tracking-[-0.55px]">
                      Developing Kids Website from Scratch
                    </Text>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">
                    <Text size="text6xl" as="p" className="tracking-[-0.55px]">
                      Introduction
                    </Text>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <div className="h-[756px] rounded-md bg-[url(/public/images/img_rectangle_16560.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                <div className="flex flex-col items-center gap-[254px] rounded-md bg-black-900_7f px-5 py-[22px] lg:gap-[190px] md:gap-[190px] sm:gap-[127px] sm:py-4">
                  <Button
                    size="8xl"
                    shape="square"
                    className="mt-[274px] w-[112px]"
                  >
                    <img src="images/img_vector.svg" />
                  </Button>
                  <div className="ml-[18px] flex flex-col gap-[18px] self-stretch md:ml-0">
                    <div className="h-[5px] bg-blue_gray-100_99" />
                    <div className="mr-[30px] flex justify-between gap-5 md:mr-0 md:flex-col">
                      <div className="flex flex-1 items-center gap-[30px] md: self-stretch sm: flex-col">
                        <Img
                          src="images/img_refresh.svg"
                          alt="Refresh"
                          className="h-[42px] w-[42px] sm:w-full"
                        />
                        <Img
                          src="images/img_icon_play.svg"
                          alt="Iconplay"
                          className="h-[48px] w-[48px] sm:w-full"
                        />
                        <Img
                          src="images/img_icon_next.svg"
                          alt="Iconnext"
                          className="h-[42px] w-[42px] sm:w-full"
                        />
                        <Img
                          src="images/img_icon_speaker.svg"
                          alt="Iconspeaker"
                          className="h-[36px] w-[36px] sm:w-full"
                        />
                        <Text
                          size="text6xl"
                          as="p"
                          className="self-start tracking-[-0.55px] !text-gray-50 sm:self-auto"
                        >
                          0.00 / 24.01
                        </Text>
                      </div>
                      <div className="flex items-center gap-[31px]">
                        <Img
                          src="images/img_icon_caption.svg"
                          alt="Iconcaption"
                          className="h-[42px] w-[42px]"
                        />
                        <Img
                          src="images/img_lets_icons_setting_fill.svg"
                          alt="Letsicons"
                          className="h-[42px] w-[42px]"
                        />
                        <Img
                          src="images/img_computer.svg"
                          alt="Computer"
                          className="h-[48px] w-[48px]"
                        />
                        <Img
                          src="images/img_icon_save.svg"
                          alt="Iconsave"
                          className="h-[42px] w-[42px]"
                        />
                        <Img
                          src="images/img_icon_full_screen.svg"
                          alt="Iconfull"
                          className="h-[42px] w-[42px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
