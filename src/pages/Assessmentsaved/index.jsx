import { Helmet } from "react-helmet";
import { Button, Img, Heading } from "../../components";
import Header from "../../components/Header";
import UserProfile4 from "../../components/UserProfile4";
import React, { Suspense } from "react";

const data = [
  {
    userTitle: (
      <>
        Invent an automated tool
        <br />
        to grow food indoors
      </>
    ),
    userAbout: "About Assessment",
    userDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was also popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    userTitle: (
      <>
        Invent an automated tool
        <br />
        to grow food indoors
      </>
    ),
    userAbout: "About Assessment",
    userDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was also popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    userTitle: (
      <>
        Invent an automated tool
        <br />
        to grow food indoors
      </>
    ),
    userAbout: "About Assessment",
    userDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was also popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    userTitle: (
      <>
        Invent an automated tool
        <br />
        to grow food indoors
      </>
    ),
    userAbout: "About Assessment",
    userDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was also popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function AssessmentsavedPage() {
  return (
    <>
      <Helmet>
        <title>Assessment Saved</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-gray-50_02">
        <Header className="relative z-[1] self-stretch" />
        <div className="relative mt-[-2px] flex justify-center self-stretch bg-amber-300_02 py-1">
          <div className="container-xs flex justify-center px-14 lg:px-5 md:px-5">
            <Heading
              size="text7xl"
              as="h1"
              className="capitalize md:text-[22px]"
            >
              STEM Assessment
            </Heading>
          </div>
        </div>
        <div className="container-xs mb-1 mt-8 px-14 lg:px-5 md:px-5">
          <div className="mr-3 flex flex-col gap-[38px] md:mr-0">
            <div className="mx-[142px] flex justify-center gap-[18px] md:mx-0 md:flex-col">
              <Button
                color="white_A700"
                size="xl"
                shape="round"
                leftIcon={
                  <Img
                    src="images/img_icon_it_blue_800.svg"
                    alt="Icon/it"
                    className="my-0.5 h-[20px] w-[20px]"
                  />
                }
                className="flex-1 gap-2 border border-solid border-blue-800 font-semibold md:self-stretch"
              >
                Information Technology
              </Button>
              <Button
                color="white_A700"
                size="xl"
                shape="round"
                leftIcon={
                  <Img
                    src="images/img_icon_maths.svg"
                    alt="Icon/maths"
                    className="my-0.5 h-[20px] w-[20px]"
                  />
                }
                className="min-w-[180px] gap-2 border border-solid border-blue-800 font-semibold"
              >
                Mathematics
              </Button>
              <Button
                size="xl"
                variant="outline"
                shape="round"
                leftIcon={
                  <Img
                    src="images/img_settings.png"
                    alt="Settings"
                    className="my-0.5 h-[20px] w-[20px] object-cover"
                  />
                }
                className="min-w-[136px] gap-2 font-semibold"
              >
                Science
              </Button>
              <Button
                size="xl"
                variant="outline"
                shape="round"
                leftIcon={
                  <Img
                    src="images/img_icon_ai.svg"
                    alt="Icon/ai"
                    className="my-0.5 h-[20px] w-[20px]"
                  />
                }
                className="flex-1 gap-2 font-semibold md:self-stretch"
              >
                Artificial Intelligence
              </Button>
              <Button
                size="xl"
                shape="round"
                leftIcon={
                  <Img
                    src="images/img_bookmark_gray_50.svg"
                    alt="Bookmark"
                    className="my-0.5 h-[20px] w-[20px]"
                  />
                }
                className="min-w-[220px] gap-2 font-semibold text-white-a700"
              >
                Saved Challenges
              </Button>
            </div>
            <div className="grid grid-cols-2 justify-center gap-[38px] lg:grid-cols-2 md:grid-cols-1">
              {" "}
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <UserProfile4
                    {...d}
                    key={"assessment" + index}
                    className="bg-blue-800"
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
