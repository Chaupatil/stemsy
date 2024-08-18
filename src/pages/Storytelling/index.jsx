import { Helmet } from "react-helmet";
import { Input, Img, SelectBox, ChipView } from "../../components";
import Header from "../../components/Header";
import StorytellingRowOne from "./StorytellingRowOne";
import React, { Suspense } from "react";

const data = [
  { rectangle: "images/img_rectangle_16610_356x318.png" },
  { rectangle: "images/img_rectangle_16611_356x316.png" },
  { rectangle: "images/img_rectangle_16612_356x318.png" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function StorytellingPage() {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `What is Storytelling?` },
    { value: 2, label: `Give some examples of storytelling` },
    { value: 3, label: `How to start learning?` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <>
      <Helmet>
        <title>StoryTelling</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[58px] bg-gray-50 sm:gap-[29px]">
        <div className="h-[392px] bg-[url(/public/images/img_group_8.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
          <div className="mb-1.5 flex flex-col gap-[50px]">
            <Header />
            <StorytellingRowOne />
          </div>
        </div>
        <footer className="mb-[130px] flex flex-col items-center">
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
              setValues={selectedChipOptions}
              className="mt-[38px] flex w-[46%] flex-wrap gap-5"
            >
              {(option) => (
                <React.Fragment key={option.index}>
                  {option.isSelected ? (
                    <div
                      onClick={option.toggle}
                      className="flex h-[36px] min-w-[174px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-lg border border-solid border-gray-900_99 bg-indigo-500_30 px-4 text-center text-[14px] text-gray-900"
                    >
                      <span>{option.label}</span>
                    </div>
                  ) : (
                    <div
                      onClick={option.toggle}
                      className="flex h-[36px] min-w-[174px] cursor-pointer flex-row items-center justify-center rounded-lg bg-indigo-500_30 px-4 text-center text-[14px] text-gray-900"
                    >
                      <span>{option.label}</span>
                    </div>
                  )}
                </React.Fragment>
              )}
            </ChipView>
            <div className="ml-3 mt-3 flex w-[80%] justify-center gap-5 lg:w-full md:ml-0 md:w-full md:flex-col">
              <SelectBox
                color="indigo_500"
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
                        src="images/img_storytelling.png"
                        alt="Storytelling"
                        className="h-[26px] w-[24px]"
                      />
                      <span>{e.label}</span>
                    </div>
                  </>
                )}
                name="primarybutton"
                placeholder={`Storytelling`}
                options={dropDownOptions}
                className="w-[16%] gap-2 font-semibold md:w-full"
              />
              <Input
                color="indigo_500_0c"
                size="md"
                shape="round"
                name="message"
                placeholder={`Type your message here...`}
                suffix={
                  <Img
                    src="images/img_icon_ri_mic_line.svg"
                    alt="Menu"
                    className="my-0.5 h-[26px] w-[32px]"
                  />
                }
                className="Flex-grow gap-2 border border-solid border-indigo-500_01"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
