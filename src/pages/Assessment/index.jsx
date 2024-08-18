import { Helmet } from "react-helmet";
import { Heading, Img, SelectBox, Button, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close.jsx";
import AssessmentRowFour from "./AssessmentRowFour";
import React from "react";
import { TabList, Tab, Tabs } from "react-tabs";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AssessmentPage() {
  const [searchBarValue5, setSearchBarValue5] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Assessment</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Tabs
        className="flex w-full flex-col gap-[38px] bg-gray-50_02"
        selectedTabClassName="!text-white-a700 font-semibold text-[16px] bg-blue-800 rounded-lg"
        selectedTabPanelClassName="tab-panel--selected"
      >
        <div className="flex flex-col items-center gap-8">
          <header className="self-stretch">
            <div className="relative z-[1] flex items-center justify-between gap-5 bg-blue-800 px-[34px] py-[18px] md:flex-col sm:px-4">
              <div className="flex items-center gap-[18px]">
                <div className="mb-1 flex flex-col items-center p-3">
                  <a href="#">
                    <Img
                      src="images/img_icon_charm_menu_hamburger.svg"
                      alt="Iconcharmmenu"
                      className="h-[32px] w-[32px]"
                    />
                  </a>
                </div>
                <Img
                  src="images/img_header_logo.png"
                  alt="Headerlogo"
                  className="h-[52px] w-[154px] self-end object-contain"
                />
              </div>
              <div className="flex w-[46%] items-center justify-center gap-[22px] md:w-full md:flex-col">
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      alt="Arrow Down"
                      className="h-[24px] w-[24px]"
                    />
                  }
                  name="explorebutton"
                  placeholder={`Explore`}
                  options={dropDownOptions}
                  className="w-[18%] gap-2 font-semibold md:w-full"
                />
                <Input
                  shape="round"
                  name="search"
                  placeholder={`Search here`}
                  value={searchBarValue5}
                  onChange={(e) => setSearchBarValue5(e.target.value)}
                  suffix={
                    searchBarValue5?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue5("")}
                        height={24}
                        width={24}
                        fillColor="#7b7a7cff"
                      />
                    ) : (
                      <Img
                        src="images/img_search_gray_600_03.svg"
                        alt="Search"
                        className="h-[24px] w-[24px]"
                      />
                    )
                  }
                  className="flex-grow gap-2 text-gray-400"
                />
                <a href="#">
                  <Button
                    size="3xl"
                    className="w-[54px] rounded-[26px] border border-solid border-gray-50"
                  >
                    <Img src="images/img_icon_ri_mic_line.svg" />
                  </Button>
                </a>
              </div>
              <div className="flex w-[18%] items-center justify-between gap-5 md:w-full">
                <SelectBox
                  variant="outline"
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_50.svg"
                      alt="Arrow Down"
                      className="h-[24px] w-[24px]"
                    />
                  }
                  getOptionLabel={(e) => (
                    <>
                      <div className="flex items-center">
                        <Img
                          src="images/img_icon_uillanguage.svg"
                          alt="Icon/uil:language"
                          className="h-[24px] w-[24px]"
                        />
                        <span>{e.label}</span>
                      </div>
                    </>
                  )}
                  name="language"
                  placeholder={`English`}
                  options={dropDownOptions}
                  className="w-[52%] gap-2 font-semibold"
                />
                <a href="https://www.youtube.com/" target="_blank">
                  <Img
                    src="images/img_ellipse_2.png"
                    alt="Image"
                    className="h-[52px] w-[52px] rounded-[26px] object-cover"
                  />
                </a>
              </div>
            </div>
            <div className="relative mt-[-2px] flex justify-center bg-amber-300_02 py-1">
              <div className="container-xs flex justify-center px-14 lg:px-5 md:px-5">
                <Heading
                  size="text7xl"
                  as="p"
                  className="capitalize md:text-[22px]"
                >
                  STEM Assessment
                </Heading>
              </div>
            </div>
          </header>
          <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
            <TabList className="mr-2.5 flex gap-[18px] md:mr-0 md:flex-col">
              <Tab className="flex items-center gap-2 p-2">
                <div className="h-[20px] w-[20px]" />
                <div className="!text-white-a700">Information Technology</div>
              </Tab>
              <Tab className="flex items-center gap-2 p-2">
                <div className="h-[20px] w-[20px]" />
                <div className="!text-blue-800">Mathematics</div>
              </Tab>
              <Tab className="flex items-center gap-2 p-2">
                <div className="h-[20px] w-[20px] object-cover" />
                <div className="!text-blue-800">Science</div>
              </Tab>
              <Tab className="flex items-center gap-2 p-2">
                <div className="h-[20px] w-[20px]" />
                <div className="!text-blue-800">Artificial Intelligence</div>
              </Tab>
              <Tab className="flex items-center gap-2 p-2">
                <div className="h-[20px] w-[20px]" />
                <div className="!text-blue-800">Saved Challenges</div>
              </Tab>
            </TabList>
          </div>
        </div>
        <AssessmentRowFour />
      </Tabs>
    </>
  );
}
