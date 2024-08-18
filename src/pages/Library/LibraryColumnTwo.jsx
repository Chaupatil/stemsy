import { Heading, Button, Img } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import UserProfile3 from "../../components/UserProfile3";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function LibraryColumnTwo() {
  return (
    <div className="mb-1">
      <Tabs
        className="flex flex-col items-center"
        selectedTabClassName="!text-white-a700 bg-blue-800 rounded-lg"
        selectedTabPanelclassName="mt-8 ml-[68px] md:ml-0 !relative tab-panel--selected"
      >
        <div className="container-xs lg:px-5 md:px-5">
          <div className="flex items-center justify-between gap-5">
            <Heading
              size="heading4xl"
              as="h1"
              className="ml-[68px] tracking-[-0.87px] md:text-[32px] sm:text-[30px]"
            >
              My Learning
            </Heading>
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
              className="min-w-[210px] gap-2 self-end font-semibold text-white-a700"
            >
              Share Library
            </Button>
          </div>
          <TabList className="mx-[70px] flex flex-wrap gap-[18px] md:mx-0">
            <Tab className="px-[22px] py-2 text-[16px] font-semibold text-blue-800 lg:text-[13px] sm:px-4">
              In Progress
            </Tab>
            <Tab className="px-[22px] py-2 text-[16px] font-semibold text-blue-800 lg:text-[13px] sm:px-4">
              Completed
            </Tab>
          </TabList>
          {[...Array(2)].map((_, index) => (
            <TabPanel
              key={`tab-panel${index}`}
              className="absolute ml-[68px] mt-8 items-center md:ml-0"
            >
              <div className="w-full">
                <div className="flex flex-col items-start">
                  <div className="flex gap-[18px] self-stretch md:flex-col">
                    <a href="https://www.youtube.com/" target="_blank">
                      <UserProfile2 />
                    </a>
                    <UserProfile2
                      userImage="images/img_rectangle_16588.png"
                      descriptionText="Developing Kids Website from Scratch"
                      goToCourseButton="Go to course"
                      removeFromProgressButton="Remove from progress"
                    />
                  </div>
                  <Heading
                    size="heading4xl"
                    as="h2"
                    className="mt-10 tracking-[-0.87px] md:text-[32px] sm:text-[30px]"
                  >
                    Created Playlist
                  </Heading>
                  <div className="mr-[792px] flex gap-[62px] self-stretch md:mr-0 md:flex-col">
                    <UserProfile3 />
                    <UserProfile3
                      userImage="images/img_rectangle_16586.png"
                      coursesButton="10 Courses"
                      titleText="Fundamental of Coding"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
