import { Helmet } from "react-helmet";
import { Heading, RatingBar, Img, Text } from "../../components";
import AboutCourseColumnbookmark from "../../components/AboutCourseColumnbookmark";
import Header from "../../components/Header";
import AboutcourseRowFour from "./AboutcourseRowFour";
import AboutcourseRowOne from "./AboutcourseRowOne";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function AboutcoursePage() {
  return (
    <>
      <Helmet>
        <title>About Course</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-gray-50_02">
        <div className="mb-1 flex flex-col items-center gap-5">
          <div className="relative h-[1542px] content-center self-stretch lg:h-auto md:h-auto">
            <div className="mx-auto flex flex-1 flex-col items-center">
              <div className="flex flex-col items-center self-stretch">
                <div className="h-[1498px] self-stretch bg-[url(/public/images/img_group_13.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                  <div className="mb-[30px] flex flex-col items-center">
                    <Header className="relative z-[1] self-stretch" />
                    <div className="relative mt-[-2px] self-stretch bg-blue-800 py-[82px] lg:py-8 md:py-5 sm:py-4">
                      <AboutcourseRowOne />
                    </div>
                    <AboutcourseRowFour />
                    <div className="container-xs mt-[42px] flex flex-col items-start lg:px-5 md:px-5">
                      <Heading
                        size="text7xl"
                        as="h4"
                        className="tracking-[-0.64px] md:text-[22px]"
                      >
                        About This Class
                      </Heading>
                      <Heading
                        as="h5"
                        className="mt-3.5 w-[56%] !font-normal leading-6 tracking-[-0.41px] lg:w-full md:w-full"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </Heading>
                      <Heading
                        size="text7xl"
                        as="h6"
                        className="mt-20 tracking-[-0.64px] md:text-[22px]"
                      >
                        Meet Your Teacher
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="container-xs relative z-[2] mt-[-14px] flex flex-col items-start pl-[82px] pr-14 lg:px-5 md:px-5">
                  <Heading as="p" className="tracking-[-0.41px]">
                    Laxmi Pandit
                  </Heading>
                </div>
              </div>
              <div className="container-xs relative z-[3] mt-[-30px] flex flex-col items-start lg:px-5 md:px-5">
                <Img
                  src="images/img_ellipse_3_60x60.png"
                  alt="Image"
                  className="h-[60px] w-[60px] rounded-[30px] object-cover"
                />
              </div>
            </div>
            <Heading
              size="textxl"
              as="p"
              className="absolute bottom-[6.93px] left-[14%] z-[4] m-auto !font-normal tracking-[-0.37px] !text-gray-600_02"
            >
              Developer, Designer
            </Heading>
          </div>
          <div className="container-xs lg:px-5 md:px-5">
            <Tabs
              className="flex flex-col items-start"
              selectedTabClassName="!text-white-a700 bg-blue-800 rounded-lg"
              selectedTabPanelClassName="mt-5 !relative tab-panel--selected"
            >
              <Heading
                as="h2"
                className="w-[56%] !font-normal leading-6 tracking-[-0.41px] lg:w-full md:w-full"
              >
                <>
                  Hello, I&#39;m Siobhan (pronounced: Shivon ... an Irish name!
                  )<br />
                  My work spans the disciplines of Figure Drawing, Painting,
                  Filmmaking and Animation. To say the least, my art journey has
                  been varied, scenic and multi-faceted!! However, the one thing
                  that was missing on this journey was a guide, a mentor, or
                  someone who could advise and give me feedback. <br />
                  Here&#39;s what my journey looked like: <br />
                  Starting out, I studied Film in Dublin, and I spent a semester
                  on a scholarship at the Tisch School of the Arts, at NYU,
                  shooting 16mm short films in New York. Later, I studied
                  Drawing and Animation. Since 2005, I&#39;ve worked in studios
                  in Vancouver and Dublin: I&#39;ve worked as a professional
                  Background and Environment Artist; I&#39;ve worked as a
                  Storyboard Artist, Concept Artist
                </>
              </Heading>
              <div className="mt-[46px] h-px w-full self-stretch bg-gray-400_03" />
              <Heading
                size="text7xl"
                as="h3"
                className="mt-8 tracking-[-0.64px] md:text-[22px]"
              >
                {" "}
                Class Reviews
              </Heading>
              <TabList className="mt-3.5 flex flex-wrap gap-3 self-stretch">
                <Tab className="px-4 py-2 text-[14px] font-semibold text-blue-800">
                  Highest
                </Tab>
                <Tab className="px-4 py-2 text-[14px] font-semibold text-blue-800">
                  Lowest
                </Tab>
                <Tab className="px-4 py-2 text-[14px] font-semibold text-blue-800">
                  Most Recent
                </Tab>
              </TabList>
              {[...Array(3)].map((_, index) => (
                <TabPanel
                  key={`tab-panel${index}`}
                  className="absolute mt-5 self-stretch"
                >
                  {" "}
                  <div className="w-full self-stretch">
                    <div className="flex flex-col gap-14 sm:gap-7">
                      <div>
                        <div className="flex flex-col gap-[34px]">
                          <div className="flex items-center gap-2.5">
                            <Img
                              src="images/img_ic_round_star.svg"
                              alt="Image"
                              className="h-[48px] w-[48px]"
                            />{" "}
                            <Text
                              size="text9xl"
                              as="p"
                              className="tracking-[-0.78px] md:text-[28px] sm:text-[26px]"
                            >
                              {" "}
                              4.2
                            </Text>
                          </div>
                          <div>
                            <div className="flex flex-col gap-9">
                              <div>
                                <div className="flex items-start justify-center gap-3 md:flex-col">
                                  <Img
                                    src="images/img_ellipse_2_48x48.png"
                                    alt="Image"
                                    className="h-[48px] w-[48px] rounded-[24px] object-cover md:w-full"
                                  />
                                  <div className="flex flex-1 flex-col gap-2 self-center md:self-stretch">
                                    {" "}
                                    <div className="flex items-center gap-4">
                                      <Heading
                                        size="headingmd"
                                        as="h4"
                                        className="tracking-[-0.41px]"
                                      >
                                        Komal
                                      </Heading>
                                      <RatingBar
                                        value={4}
                                        isEditable={true}
                                        color="#d9d9d9"
                                        activeColor="#ffc962"
                                        size={24}
                                        className="flex gap-2.5"
                                      />
                                      <Heading
                                        size="textxl"
                                        as="h5"
                                        className="!font-normal tracking-[-0.37px] !text-gray-700"
                                      >
                                        Oct 18, 2020
                                      </Heading>
                                    </div>
                                    <Heading
                                      size="textxl"
                                      as="h6"
                                      className="w-[42%] !font-normal leading-[22px] tracking-[-0.37px] lg:w-full md:w-full"
                                    >
                                      The course was very comprehensive and easy
                                      to understand. The instructors made sure
                                      that they are giving the information in a
                                      way that won&#39;t make me confused. Thank
                                      you so much for this great course!
                                    </Heading>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-start justify-center md:flex-col">
                                <Img
                                  src="images/img_ellipse_2_48x48.png"
                                  alt="Image"
                                  className="h-[48px] w-[48px] rounded-[24px] object-cover md:w-full"
                                />
                                <div className="flex-1 self-center px-3 md:self-stretch">
                                  <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-4">
                                      <Heading
                                        size="headingmd"
                                        as="h6"
                                        className="tracking-[-0.41px]"
                                      >
                                        Komal
                                      </Heading>
                                      <RatingBar
                                        value={4}
                                        isEditable={true}
                                        color="#d9d9d9"
                                        activeColor="#ffc962"
                                        size={24}
                                        className="flex gap-2.5"
                                      />
                                      <Heading
                                        size="textxl"
                                        as="p"
                                        className="self-end !font-normal tracking-[-0.37px] !text-gray-760"
                                      >
                                        Oct 18, 2020
                                      </Heading>
                                    </div>
                                    <Heading
                                      size="textxl"
                                      as="p"
                                      className="w-[42% ] !font-normal leading-[22px] tracking-[-0.37px] lg:w-full md:w-full"
                                    >
                                      The course was very comprehensive and easy
                                      to understand. The instructors made sure
                                      that they are giving the information in a
                                      way that won&#39;t make me confused. Thank
                                      you so much for this great course!
                                    </Heading>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[30px]">
                        <Heading
                          size="text7xl"
                          as="p"
                          className="leading-[38px] tracking-[-0.64px] md:text-[22px]"
                        >
                          More Like this
                        </Heading>
                        <div className="mr-[258px] flex gap-[30px] md:mr-0 md:flex-col">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {[...Array(3)].map((d, index) => (
                              <AboutCourseColumnbookmark
                                key={"listbookmark" + index}
                              />
                            ))}
                          </Suspense>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
