import { Img, Heading, Button } from "../../components";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function AssessmentRowFour() {
  return (
    <div className="mb-1 flex justify-center">
      <div className="container-xs flex justify-center px-14 lg:px-5 md:px-5">
        <div className="flex w-[84%] justify-center rounded-[16px] bg-blue-800 px-11 lg:w-full md:w-full md:px-5 sm:px-4">
          <Tabs
            className="mt-[52px] w-full"
            selectedTabClassName="!text-white-a700 font-semibold text-[18px] bg-indigo-400_02 rounded-lg"
            selectedTabPanelClassName="mt-[52px] !relative tab-panel--selected"
          >
            <TabList className="flex gap-3.5">
              <Tab className="flex items-center gap-2 p-3.5">
                <div className="h-[24px] w-[24px]" />
                <div className="! text-white-a700">Catergories</div>
              </Tab>
              <Tab className="flex gap-2 p-3.5">
                <div className="h-[26px] w-[26px]" />
                <div className="! text-white-a700">Build</div>
              </Tab>
              <Tab className="flex items-center gap-2 p-3.5">
                <div className="h-[24px] w-[24px]" />
                <div className="! text-white-a700">Invention</div>
              </Tab>
            </TabList>
            <div className="mr-9 flex items-start justify-between gap-5 md:mr-0 md:flex-col">
              {[...Array(3)].map((_, index) => (
                <TabPanel
                  key={`tab-panel${index}`}
                  className="absolute mt-[52px] flex-1 self-end md:self-stretch sm:self-auto"
                >
                  <div className="w-full flex-1 self-end md:self-stretch sm:self-auto">
                    <div className="flex flex-col items-start gap-11">
                      <Heading
                        size="heading7xl"
                        as="h5"
                        className="leading-[64px] tracking-[-1.20px] !text-white-a700 md:text-[32px] sm:text-[26px]"
                      >
                        <span className="text-amber-300_02">Invent</span>
                        <span className="text-white-a700">
                          <>
                            &nbsp; an automated tool
                            <br />
                          </>
                        </span>
                        <span className="text-amber-300_02">
                          to grow food indoors
                        </span>
                      </Heading>
                      <div className="flex gap-[15px] self-stretch">
                        <Button
                          color="white_A700"
                          size="4xl"
                          shape="round"
                          leftIcon={
                            <Img
                              src="images/img_pajamasretry.svg"
                              alt="Pajamas: retry"
                              className="h-[24px] w-[24px]"
                            />
                          }
                          className="min-w-[210px] gap-2 font-semibold"
                        >
                          New Challenge
                        </Button>
                        <Button
                          color="indigo_400_01"
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
                          Save challenge
                        </Button>
                      </div>
                      <Heading
                        size="text7xl"
                        as="h6"
                        className="tracking-[-0.64px] !text-white-a700 md:text-[22px]"
                      >
                        About Assessment
                      </Heading>
                    </div>
                  </div>
                </TabPanel>
              ))}
              <div className="flex flex-col items-end gap-2">
                <Img
                  src="images/img_search.svg"
                  alt="Search"
                  className="h-[46px] w-[46px]"
                />
                <Img
                  src="images/img_search_indigo_400.svg"
                  alt="Search"
                  className="mr-11 h-[66px] w-[66px] md:mr-0"
                />
              </div>
            </div>
            <div className="mt-3.5 flex items-start justify-between gap-5 md:flex-col">
              <Heading
                as="p"
                className="w-[76%] !font-normal leading-6 tracking-[-0.41px] !text-blue-50_02 lg:w-[76%] md:w-full"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Heading>
              <Img
                src="images/img_light_bulb.svg"
                alt="Lightbulb"
                className="h-[208px] w-[16%] self-center object-contain md:w-full"
              />
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
