import { Helmet } from "react-helmet";
import { Img, Input, SelectBox, Heading, ChipView } from "../../components";
import Header from "../../components/Header";
import React, { Suspense } from "react";

const data = [
  { rectangle: "images/img_rectangle_16610.png" },
  { rectangle: "images/img_rectangle_16611.png" },
  { rectangle: "images/img_rectangle_16612.png" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AIchatbotPage() {
  const [chipoptions, setChipoptions] = React.useState(() => [
    { value: 1, label: `What is Chatbot?` },
    { value: 2, label: `Explain Plans` },
    { value: 3, label: `How to start learning?` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <>
      <Helmet>
        <title>AI Chatbot</title>
        <meta
          name="description"
          content="web site created using create-react-app"
        />
      </Helmet>
      <div className="relative h-[1124px] w-full bg-gray-50">
        <div className="absolute bottom-[19%] left-0 right-0 m-auto flex flex-1 flex-col items-center gap-[38px] px-14 md:px-5 sm:px-4">
          <div className="flex w-[54%] gap-[22px] md:w-full md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <Img
                  key={"aichatbot" + index}
                  src={d.rectangle}
                  alt="Rectangle"
                  className="h-[356px] w-[32%] rounded-[16px] object-contain md:w-full"
                />
              ))}
            </Suspense>
          </div>
          <ChipView
            options={chipoptions}
            setOptions={setChipoptions}
            values={selectedChipOptions}
            setValues={setSelectedChipOptions}
            className="flex w-[38%] flex-wrap gap-5"
          >
            {(option) => (
              <React.Fragment key={option.index}>
                {option.isSelected ? (
                  <div
                    onclick={option.toggle}
                    className="flex h-[36px] min-w-[154px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-lg border border-solid border-gray-900_99 bg-gray-200_01 px-4 text-center text-[14px] text-gray-900"
                  >
                    <span>{option.label}</span>
                  </div>
                ) : (
                  <div
                    onclick={option.toggle}
                    className="flex h-[36px] min-w-[154px] cursor-pointer flex-row items-center justify-center rounded-lg bg-gray-200_01 px-4 text-center text-[14px] text-gray-900"
                  >
                    <span>{option.label}</span>
                  </div>
                )}
              </React.Fragment>
            )}
          </ChipView>
        </div>
        <div className="absolute left-0 right-0 top-0 m-auto h-[392px] flex-1 bg-[url(/public/images/img_group_10.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
          <div className="mb-[70px] flex flex-col items-center gap-[78px] lg:gap-[78px] md:gap-[58px] sm:gap-[39px]">
            <Header className="self-stretch" />
            <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
              <div className="flex w-[32%] flex-col gap-3 lg:w-full md:w-full">
                <div className="ml-[60px] mr-[70px] flex items-center justify-center gap-[18px] md:mx-0 sm:flex-col">
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
                    AI Chatbot
                  </Heading>
                </div>
                <Heading
                  size="text4xl"
                  as="h2"
                  className="text-center !font-normal leading-[30px] !text-gray-800"
                >
                  &quot;Always On, Always Helpful: Your AI Companion for Instant
                  Answers and Assistance.&quot;
                </Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[12%] left-0 right-0 m-auto flex flex-1 justify-center gap-5 px-14 md:relative md:flex-col md:px-5 sm:px-4">
          <SelectBox
            color="blue_800"
            size="md"
            shape="round"
            indicator={
              <img
                src="images/img_arrowdown_gray_50.svg"
                alt="Arrow Down"
                className="h-[26px] w-[24px]"
              />
            }
            getOptionLabel={(e) => (
              <>
                <div className="flex items-center">
                  <Img
                    src="images/img_message_bot.png"
                    alt="Message Bot"
                    className="h-[26px] w-[24px]"
                  />
                  <span>{e.label}</span>
                </div>
              </>
            )}
            name="primarybutton"
            placeholder={`Chatbot`}
            options={dropDownOptions}
            className="w-[10%] gap-2 font-semibold md:w-full"
          />
          <div className="flex w-[52%] justify-center md:w-full">
            <Input
              color="blue_50_02"
              size="md"
              shape="round"
              name="message"
              placeholder={`Type your message here...`}
              suffix={
                <Img
                  src="images/img_menu.svg"
                  alt="Menu"
                  className="my-0.5 h-[26px] w-[32px]"
                />
              }
              className="w-full gap-2 border border-solid border-blue_gray-400_01"
            />
          </div>
        </div>
        <Img
          src="images/img_frame.svg"
          alt="Image"
          className="absolute right-[9%] top-[21%] m-auto h-[172px] w-[12%] object-contain"
        />
        <Img
          src="images/img_frame_light_blue_300.svg"
          alt="Image"
          className="absolute bottom-0 right-[16%] top-0 my-auto h-[238px] w-[8%] object-contain"
        />
        <Img
          src="images/img_frame_light_blue_300_432x178.svg"
          alt="Image"
          className="absolute bottom-[14%] left-[6%] m-auto h-[432px] w-[10%] object-contain"
        />
      </div>
    </>
  );
}
