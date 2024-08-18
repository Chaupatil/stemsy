import { Helmet } from "react-helmet";
import { Input, Img, SelectBox, ChipView, Heading } from "../../components";
import Header from "../../components/Header";
import React, { Suspense } from "react";

const data = [
  { rectangle: "images/img_rectangle_16610_1.png" },
  { rectangle: "images/img_rectangle_16611_1.png" },
  { rectangle: "images/img_rectangle_16612_1.png" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function StorytellingOnePage() {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `How to manage time in exams?` },
    { value: 2, label: `Give some examples of storytelling` },
    { value: 3, label: `How to start learning?` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <>
      <Helmet>
        <title>StoryTellingOne</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-gray-50">
        <div className="mb-[130px] flex flex-col gap-[22px]">
          <div className="relative h-[426px]">
            <div className="absolute left-0 right-0 top-0 m-auto h-[392px] flex-1 bg-[url(/public/images/img_group_44.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
              <div className="mb-[70px] flex flex-col items-center gap-[78px] lg:gap-[78px] md:gap-[58px] sm:gap-[39px]">
                <Header className="self-stretch" />
                <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
                  <div className="flex w-[32%] flex-col gap-3 lg:w-full md:w-full">
                    <div className="mx-[60px] flex items-center gap-[18px] md:mx-0">
                      <Img
                        src="images/img_play_orange_100.svg"
                        alt="Play"
                        className="h-[62px] w-[62px]"
                      />
                      <Heading
                        size="heading6xl"
                        as="h1"
                        className="md:text-[32px] sm:text-[26px]"
                      >
                        Tutor
                      </Heading>
                    </div>
                    <Heading
                      size="text4xl"
                      as="h2"
                      className="text-center !font-normal leading-[30px] !text-gray-800"
                    >
                      &quot;Always On, Always Helpful: Your AI Companion for
                      Instant Answers and Assistance.&quot;
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_frame_yellow_900.svg"
              alt="Image"
              className="absolute bottom-[-0.37px] right-[11%] m-auto h-[172px] w-[12%] object-contain"
            />
          </div>
          <footer className="flex flex-col items-center">
            <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
              <div className="ml-[76px] mr-[86px] flex w-[78%] gap-[22px] md:mx-0 md:w-full md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <Img
                      key={"storytelling" + index}
                      src={d.rectangle}
                      alt="Rectangle"
                      className="mt-7 h-[356px] w-[32%] rounded-[16px] object-contain md:mt-0 md:w-full"
                    />
                  ))}
                </Suspense>
              </div>
              <ChipView
                options={chipOptions}
                setOptions={setChipOptions}
                values={selectedChipOptions}
                setValues={setSelectedChipOptions}
                className="mt-[34px] flex w-[52%] flex-wrap gap-5"
              >
                {(option) => (
                  <React.Fragment key={option.index}>
                    {option.isSelected ? (
                      <div
                        onClick={option.toggle}
                        className="flex h-[36px] min-w-[254px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-lg border border-solid border-gray-900_99 bg-light_green-800_26 px-4 text-center text-[14px] text-gray-900"
                      >
                        <span>{option.label}</span>
                      </div>
                    ) : (
                      <div
                        onClick={option.toggle}
                        className="flex h-[36px] min-w-[254px] cursor-pointer flex-row items-center justify-center rounded-lg bg-light_green-800_26 px-4 text-center text-[14px] text-gray-900"
                      >
                        <span>{option.label}</span>
                      </div>
                    )}
                  </React.Fragment>
                )}
              </ChipView>
              <div className="ml-3 mt-4 flex w-[80%] justify-center gap-5 lg:w-full md:ml-0 md:w-full md:flex-col">
                <SelectBox
                  color="light_green_800"
                  size="md"
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_50.svg"
                      alt="Arrow Down"
                      className="h-[26px] w-[24px]"
                    />
                  }
                  getOptionLabel={(e) => (
                    <>
                      <div className="flex items-center">
                        <Img
                          src="images/img_play_orange_100.svg"
                          alt="Play"
                          className="h-[26px] w-[24px]"
                        />
                        <span>{e.label}</span>
                      </div>
                    </>
                  )}
                  name="primarybutton"
                  placeholder={`Tutor`}
                  options={dropDownOptions}
                  className="w-[16%] gap-2 font-semibold md:w-full"
                />
                <Input
                  color="light_green_800_0c"
                  size="md"
                  shape="round"
                  name="message"
                  placeholder={`Type your message here...`}
                  suffix={
                    <Img
                      src="images/img_icon_ri_mic_line.svg"
                      alt="Play"
                      className="h-[62px] w-[62px]"
                    />
                  }
                  className="flex-grow gap-2 border border-solid border-light_green-800"
                />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
