import { Helmet } from "react-helmet";
import {
  Heading,
  Button,
  Img,
  Text,
  Slider,
  SelectBox,
  Input,
} from "../../components";
import EventDetails from "../../components/EventDetails";
import { CloseSVG } from "../../components/Input/close.jsx";
import TextFrames from "../../components/TextFrames";
import Home1Columnrunstreak from "./Home1Columnrunstreak";
import Home1RowThirteen from "./Home1RowThirteen";
import React, { Suspense } from "react";

const data = [
  {
    eventTitle: "Science Fair",
    eventOrganizer: "Miss Shweta",
    eventImage: "images/img_ellipse_2_62x62.png",
    eventDay: "Monday",
    eventDate: "14",
    eventTimeLabel: "Time",
    eventTime: "07:00 PM",
  },
  {
    eventTitle: "STEM Q/A",
    eventOrganizer: "Miss Shweta",
    eventImage: "images/img_ellipse_2_1.png",
    eventDay: "Thrusday",
    eventDate: "14",
    eventTimeLabel: "Time",
    eventTime: "07:00 PM",
  },
  {
    eventTitle: "STEM Q/A",
    eventOrganizer: "Miss Shweta",
    eventImage: "images/img_ellipse_2_1.png",
    eventDay: "Thrusday",
    eventDate: "14",
    eventTimeLabel: "Time",
    eventTime: "07:00 PM",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Home1Page() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [searchBarValue3, setSearchBarValue3] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Home1</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[18px] bg-gray-50">
        <header className="flex items-center justify-between gap-5 self-stretch bg-blue-800 px-9 py-[18px] md:flex-col sm:px-4">
          <Img
            src="images/img_header_logo.png"
            alt="Headerlogo"
            className="ml-[72px] h-[52px] w-[154px] self-end object-contain lg:ml-0 md:ml-0 md:self-auto"
          />
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
              className="w-[18% ] gap-2 font-semibold md:w-full"
            />
            <Input
              shape="round"
              name="search"
              placeholder={`Search here`}
              value={searchBarValue3}
              onChange={(e) => setSearchBarValue3(e.target.value)}
              suffix={
                searchBarValue3?.length > 0 ? (
                  <CloseSVG
                    onClick={() => setSearchBarValue3("")}
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
          <div className="flex w-[22%] justify-center gap-3 md:w-full sm:flex-col">
            <Button
              color="gray_50"
              size="4xl"
              variant="outline"
              shape="round"
              className="min-w-[106px] font-semibold"
            >
              Sign in
            </Button>
            <Button
              color="blue_50"
              size="4xl"
              shape="round"
              className="min-w-[112px] border border-solid border-blue-800 font-semibold"
            >
              Sign up
            </Button>
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
              className="flex-grow gap-2 font-semibold"
            />
          </div>
        </header>
        <div className="container-sm mb-9 flex items-center gap-5 self-stretch lg:px-5 md:flex-col md:px-5">
          <div className="w-[79%] md:w-full">
            <div className="relative mr-5 h-[226px] md:mr-0">
              <div className="absolute left-0 right-0 top-1.5 m-auto h-[180px] flex-1 content-center rounded-[10px] bg-amber-300_01 lg:h-auto md:h-auto">
                <div className="mx-16 flex flex-1 flex-col items-start gap-2 lg:mx-0 md:mx-0">
                  <Heading
                    size="text8xl"
                    as="h1"
                    className="capitalize tracking-[-0.74px] !text-gray-900_01 md:text-[26px] sm:text-[24px]"
                  >
                    STEM Initiative for Rural Kids
                  </Heading>
                  <Heading
                    size="textxl"
                    as="h2"
                    className="w-[34%] !font-normal leading-[22px] tracking-[-0.37px] !text-gray-900_01 lg:w-full md:w-full"
                  >
                    &quot; Empowering young minds with STEM education to
                    innovate and shape the future.&quot;
                  </Heading>
                </div>
                <Img
                  src="images/img_rectangle.png"
                  alt="Image"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[180px] flex-1 rounded-[10px] object-cover"
                />
              </div>
              <Img
                src="images/img_development_of_preschool.png"
                alt="Developmentof"
                className="absolute bottom-0 right-[5%] top-0 my-auto h-[226px] w-[226px] object-cover"
              />
            </div>
            <div className="mt-[38px]">
              <div className="flex flex-col gap-[18px]">
                <div className="mr-5 flex items-center justify-between gap-5 md:mr-0">
                  <Heading
                    size="text8xl"
                    as="h3"
                    className="tracking-[-0.74px] md:text-[26px] sm:text-[24px]"
                  >
                    All the skills you need in one place
                  </Heading>
                  <Button
                    color="gray_200"
                    shape="round"
                    rightIcon={
                      <Img
                        src="images/img_icon_ionfilter.svg"
                        alt="Icon/ion:filter"
                        className="my-0.5 h-[16px] w-[16px]"
                      />
                    }
                    className="min-w-[90px] gap-2 font-semibold"
                  >
                    Filter
                  </Button>
                </div>
                <div className="flex items-start justify-center md:flex-col">
                  <div className="flex w-[96%] items-center justify-center gap-6 self-center overflow-auto overflow-x-scroll md:w-full md:flex-col">
                    <div className="mx-auto mb-5 flex w-[2000px] gap-6 md:mx-0 md:flex-col">
                      <Slider
                        autoplay
                        autoPlayInterval={2000}
                        responsive={{
                          0: { items: 1 },
                          551: { items: 1 },
                          1051: { items: 2 },
                          1441: { items: 3 },
                        }}
                        disableDotsControls
                        activeIndex={sliderState1}
                        onSlideChanged={(e) => {
                          setSliderState1(e?.item);
                        }}
                        ref={sliderRef1}
                        items={[...Array(9)].map(() => (
                          <React.Fragment key={Math.random()}>
                            <div className="px-3">
                              <div className="flex flex-col gap-4 rounded-[12px] border border-solid border-black-900_4c bg-white-a700 p-5">
                                <div className="relative h-[242px] content-center lg:h-auto md:h-auto">
                                  <Img
                                    src="images/img_rectangle_16560.png"
                                    alt="Image"
                                    className="mx-auto h-[242px] w-full flex-1 rounded-md object-cover"
                                  />
                                  <Button
                                    color="white_A700"
                                    size="md"
                                    shape="circle"
                                    className="absolute right-3 top-3 m-auto w-[32px] !rounded-[16px]"
                                  >
                                    <Img src="images/img_bookmark.svg" />
                                  </Button>
                                </div>
                                <div className="mb-1.5 flex flex-col gap-2.5">
                                  <Heading
                                    size="text4xl"
                                    as="h4"
                                    className="w-[90%] leading-7 !text-black-900 lg:w-full md:w-full"
                                  >
                                    Developing Kids Website from Scratch
                                  </Heading>
                                  <div className="flex flex-wrap">
                                    <Text
                                      as="p"
                                      className="self-end !font-inter tracking-[-0.32px] !text-gray-600_02"
                                    >
                                      Course By:
                                    </Text>
                                    <Text
                                      as="p"
                                      className="!font-inter !font-medium tracking-[-0.32px] !text-blue_gray-900"
                                    >
                                      Ravikant Rathore
                                    </Text>
                                  </div>
                                  <div className="flex justify-between gap-5">
                                    <div className="flex flex-1 items-center">
                                      <Img
                                        src="images/img_carbon_time_filled.svg"
                                        alt="Carbontime"
                                        className="h-[16px] w-[16px]"
                                      />
                                      <Text as="p">7 Hrs</Text>
                                      <Img
                                        src="images/img_uis_calender.svg"
                                        alt="Uiscalender"
                                        className="ml-3.5 h-[16px] w-[16px]"
                                      />
                                      <Text as="p">7 Modules</Text>
                                    </div>
                                    <div className="flex items-center">
                                      <img
                                        src="images/img_signal.svg"
                                        alt="Signal"
                                        className="h-[16px] w-[16px]"
                                      />
                                      <Text as="p">4.3</Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      />
                    </div>
                    <div className="flex w-[410px] flex-col gap-3 rounded-[12px] border border-solid border-black-900_4c bg-white-a700 p-5">
                      <div className="relative h-[242px] content-center lg:h-auto md:h-auto">
                        <Img
                          src="images/img_rectangle_16560_2.png"
                          alt="Image"
                          className="mx-auto h-[242px] w-full flex-1 rounded-md object-cover"
                        />
                        <Button
                          color="white_A700"
                          size="md"
                          shape="circle"
                          className="absolute right-3 top-3 m-auto w-[32px] Irounded-[16px]"
                        >
                          <Img src="images/img_bookmark.svg" />
                        </Button>
                      </div>
                      <Heading
                        size="text4xl"
                        as="p"
                        className="w-[98%] leading-7 !text-black-900 lg:w-full md:w-full"
                      >
                        Mini Coders: Web Development Fundamentals&quot;
                      </Heading>
                      <div>
                        <div className="flex flex-wrap">
                          <Text
                            as="p"
                            className="self-end !font-inter tracking-[-0.32px] !text-gray-600_02"
                          >
                            Course By:
                          </Text>
                          <Text
                            as="p"
                            className="!font-inter !font-medium tracking-[-0.32px] !text-blue_gray-900"
                          >
                            Ravikant Rathore
                          </Text>
                        </div>
                      </div>
                      <div className="mb-1.5 flex items-center justify-between gap-5">
                        <div className="flex flex-1 items-center">
                          <img
                            src="images/img_carbon_time_filled.svg"
                            alt="Carbontime"
                            className="h-[16px] w-[16px]"
                          />
                          <Text as="p">7 Hrs</Text>
                          <Img
                            src="images/img_uis_calender.svg"
                            alt="Uiscalender"
                            className="ml-3.5 h-[16px] w-[16px]"
                          />
                          <Text as="p">7 Modules</Text>
                        </div>
                        <div className="flex">
                          <Img
                            src="images/img_signal.svg"
                            alt="Signal"
                            className="h-[16px] w-[16px]"
                          />
                          <Text as="p">4.3 </Text>
                        </div>
                      </div>
                    </div>
                    <div className="w-[410px]">
                      <div className="flex h-[428px] flex-col items-start gap-3 rounded-[12px] bg-[url(/public/images/img_group_1000002278.svg)] bg-cover bg-no-repeat p-5 lg:h-auto md:h-auto">
                        <div className="relative h-[242px] content-center self-stretch lg:h-auto md:h-auto">
                          <Img
                            src="images/img_rectangle_16560_2.png"
                            alt="Image"
                            className="mx-auto h-[242px] w-full flex-1 rounded-md object-cover"
                          />
                          <Button
                            color="white_A700"
                            size="md"
                            shape="circle"
                            className="absolute right-3 top-3 m-auto w-[32px] Irounded-[16px]"
                          >
                            <Img src="images/img_bookmark.svg" />
                          </Button>
                        </div>
                        <Heading
                          size="text4xl"
                          as="p"
                          className="!text-black-900"
                        >
                          Developing Kids Website from Scratch
                        </Heading>
                        <div className="self-stretch">
                          <div className="flex flex-wrap">
                            <Text
                              as="p"
                              className="!font-inter tracking-[-0.32px] !text-gray-600_02"
                            >
                              Course By:
                            </Text>
                            <Text
                              as="p"
                              className="!font-inter !font-medium tracking-[-0.32px] !text-blue_gray-900"
                            >
                              Ravikant Rathore
                            </Text>
                          </div>
                        </div>
                        <div className="mb-2 flex items-center justify-between gap-5 self-stretch">
                          <div className="flex flex-1 items-center">
                            <Img
                              src="images/img_carbon_time_filled.svg"
                              alt="Carbontime"
                              className="h-[16px] w-[16px]"
                            />
                            <Text as="p">7 Hrs</Text>
                            <Img
                              src="images/img_uis_calender.svg"
                              alt="Uiscalender"
                              className="ml-3.5 h-[16px] w-[16px]"
                            />
                            <Text as="p">7 Modules</Text>
                          </div>
                          <div className="flex">
                            <Img
                              src="images/img_signal.svg"
                              alt="Signal"
                              className="h-[16px] w-[16px]"
                            />
                            <Text as="p">4.3 </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    color="gray_700_66"
                    size="3xl"
                    shape="circle"
                    onclick={() => {
                      sliderRef1?.current?.slideNext();
                    }}
                    className="relative z-[1] ml-[-36px] mt-[154px] w-[56px] !rounded-[28px] md:ml-0"
                  >
                    <Img src="images/img_arrow_right_blue_800.svg" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mr-2 mt-[18px] md:mr-0">
              <div className="flex flex-col items-start">
                <Heading
                  size="text8xl"
                  as="p"
                  className="!font-normal tracking-[-0.74px] !text-gray-900_01 md:text-[26px] sm:text-[24px]"
                >
                  Most Popular
                </Heading>
                <div className="mt-3 flex self-stretch">
                  <Button
                    shape="round"
                    className="min-w-[90px] font-semibold text-gray-50"
                  >
                    Courses
                  </Button>
                  <div className="flex">
                    <Button
                      variant="outline"
                      shape="round"
                      className="min-w-[72px] font-semibold"
                    >
                      Event
                    </Button>
                  </div>
                  <div className="flex">
                    <Button
                      variant="outline"
                      shape="round"
                      className="min-w-[94px] font-semibold"
                    >
                      Sessions
                    </Button>
                  </div>
                  <div className="flex flex-1">
                    <Button
                      variant="outline"
                      shape="round"
                      className="min-w-[82px] font-semibold"
                    >
                      Mentor
                    </Button>
                  </div>
                </div>
                <div className="mt-6 flex items-start self-stretch md:flex-col">
                  <div className="flex w-[96%] items-center gap-6 self-center overflow-auto overflow-x-scroll md:w-full md:flex-col">
                    <div className="mx-auto mb-5 flex w-[2016px] gap-6 md:mx-0 md:flex-col">
                      <Slider
                        autoplay
                        autoPlayInterval={2000}
                        responsive={{
                          0: { items: 1 },
                          551: { items: 1 },
                          1051: { items: 2 },
                          1441: { items: 3 },
                        }}
                        disableDotsControls
                        activeIndex={sliderState}
                        onSlideChanged={(e) => {
                          setSliderState(e?.item);
                        }}
                        ref={sliderRef}
                        items={[...Array(9)].map(() => (
                          <React.Fragment key={Math.random()}>
                            <div className="px-3">
                              <div className="flex flex-col gap-4 rounded-[12px] border border-solid border-black-900_4c bg-white-a700 p-5">
                                <div className="relative h-[242px] content-center lg:h-auto md:h-auto">
                                  <Img
                                    src="images/img_rectangle_16560.png"
                                    alt="Image"
                                    className="mx-auto h-[242px] w-full flex-1 rounded-md object-cover"
                                  />
                                  <Button
                                    color="white_A700"
                                    size="md"
                                    shape="circle"
                                    className="absolute right-3 top-3 m-auto w-[32px] !rounded-[16px]"
                                  >
                                    <Img src="images/img_bookmark.svg" />
                                  </Button>
                                </div>
                                <div className="mb-1.5 flex flex-col gap-2.5">
                                  <Heading
                                    size="text4xl"
                                    as="p"
                                    className="w-[90%] leading-7 !text-black-900 lg:w-full md:w-full"
                                  >
                                    Developing Kids Website from Scratch
                                  </Heading>
                                  <div className="flex flex-wrap">
                                    <Text
                                      as="p"
                                      className="self-end !font-inter tracking-[-0.32px] !text-gray-600_02"
                                    >
                                      Course By:
                                    </Text>
                                    <Text
                                      as="p"
                                      className="!font-inter !font-medium tracking-[-0.32px] !text-blue_gray-900"
                                    >
                                      Ravikant Rathore
                                    </Text>
                                  </div>
                                  <div className="flex justify-between gap-5">
                                    <div className="flex flex-1 gap-1.5">
                                      <div className="flex items-center gap-1">
                                        <Img
                                          src="images/img_carbon_time_filled.svg"
                                          alt="Carbontime"
                                          className="h-[16px] w-[16px]"
                                        />
                                        <Text as="p">7 Hrs</Text>
                                      </div>
                                      <div className="flex flex-1 items-center px-1.5">
                                        <Img
                                          src="images/img_uis_calender.svg"
                                          alt="Uiscalender"
                                          className="h-[16px] w-[16px]"
                                        />
                                        <Text as="p">7 Modules</Text>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <Img
                                        src="images/img_signal.svg"
                                        alt="Signal"
                                        className="h-[16px] w-[16px]"
                                      />
                                      <Text as="p">4.3 </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      />
                    </div>
                    <div className="flex w-[410px] flex-col gap-3 rounded-[12px] border border-solid border-black-900_4c bg-white-a700 p-5">
                      <div className="relative h-[242px] content-center lg:h-auto md:h-auto">
                        <Img
                          src="images/img_rectangle_16560_4.png"
                          alt="Image"
                          className="mx-auto h-[242px] w-full flex-1 rounded-md object-cover"
                        />
                        <Button
                          color="white_A700"
                          size="md"
                          shape="circle"
                          className="absolute right-3 top-3 m-auto w-[32px] !rounded-[16px]"
                        >
                          <Img src="images/img_bookmark.svg" />
                        </Button>
                      </div>
                      <Heading
                        size="text4xl"
                        as="p"
                        className="w-[90%] leading-7 !text-black-900 lg:w-full md:w-full"
                      >
                        Developing Kids Website from Scratch
                      </Heading>
                      <div>
                        <div>
                          <div className="flex flex-wrap">
                            <Text
                              as="p"
                              className="!font-inter tracking-[-0.32px] !text-gray-600_02"
                            >
                              Course By:
                            </Text>
                            <Text
                              as="p"
                              className="!font-inter !font-medium tracking-[-0.32px] !text-blue_gray-900"
                            >
                              Ravikant Rathore
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="mb-1.5 flex items-center justify-between gap-5">
                        <div className="flex flex-1 items-center">
                          <div className="flex w-[34%] items-center gap-3.5">
                            <div className="flex flex-1 items-center gap-1">
                              <Img
                                src="images/img_carbon_time_filled.svg"
                                alt="Carbontime"
                                className="h-[16px] w-[16px]"
                              />
                              <Text as="p">7 Hrs</Text>
                            </div>
                            <img
                              src="images/img_uis_calender.svg"
                              alt="Uiscalender"
                              className="h-[16px] w-[16px]"
                            />
                          </div>
                          <Text as="p">7 Modules</Text>
                        </div>
                        <div className="flex">
                          <Img
                            src="images/img_signal.svg"
                            alt="Signal"
                            className="h-[16px] w-[16px]"
                          />
                          <Text as="p">4.3 </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[428px] w-[410px] flex-col items-start gap-3 rounded-[12px] bg-[url(/public/images/img_group_1000002278.svg)] bg-cover bg-no-repeat p-5 lg:h-auto md:h-auto">
                      <div className="relative h-[242px] content-center self-stretch lg:h-auto md:h-auto">
                        <Img
                          src="images/img_rectangle_16560.png"
                          alt="Image"
                          className="mx-auto h-[242px] w-full flex-1 rounded-md object-cover"
                        />
                        <Img
                          src="images/img_close.svg"
                          alt="Close"
                          className="absolute right-3 top-3 m-auto h-[32px] w-[32px]"
                        />
                      </div>
                      <Heading
                        size="text4xl"
                        as="p"
                        className="!text-black-900"
                      >
                        Developing Kids Website from Scratch
                      </Heading>
                      <div className="self-stretch">
                        <div className="flex flex-wrap">
                          <Text
                            as="p"
                            className="!font-inter tracking-[-0.32px] !text-gray-600_02"
                          >
                            Course By:
                          </Text>
                          <Text
                            as="p"
                            className="!font-inter !font-medium tracking-[-0.32px] !text-blue_gray-900"
                          >
                            Ravikant Rathore
                          </Text>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-between gap-5 self-stretch">
                        <div className="flex flex-1 items-center">
                          <img
                            src="images/img_carbon_time_filled.svg"
                            alt="Carbontime"
                            className="h-[16px] w-[16px]"
                          />
                          <Text as="p">7 Hrs</Text>
                          <Img
                            src="images/ing_uis_calender.svg"
                            alt="Uiscalender"
                            className="ml-3.5 h-[16px] w-[16px]"
                          />
                          <Text as="p">7 Modules</Text>
                        </div>
                        <div className="flex">
                          <Img
                            src="images/img_signal.svg"
                            alt="signal"
                            className="h-[16px] w-[16px]"
                          />
                          <Text as="p">4.3 </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-[2] ml-[-26px] mt-[154px] flex flex-col items-center rounded-[28px] bg-gray-700_66 p-4 md:ml-0">
                    <Img
                      src="images/img_arrow_right_blue_800.svg"
                      alt="Arrowright"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[20%] flex-col gap-[26px] md:w-full">
            <div className="relative h-[832px] content-center lg:h-auto md:h-auto">
              <div className="mx-auto flex flex-1 flex-col gap-[26px] rounded-[10px] border border-solid border-blue_gray-100_02 bg-blue-50">
                <Home1RowThirteen />
                <div className="flex flex-col gap-6 rounded-[10px] bg-gray-50 py-3">
                  <Home1Columnrunstreak />
                  <div className="mx-3 rounded-[10px] bg-blue-800 md:mx-0">
                    <div className="flex flex-col items-center rounded-[10px]">
                      <Heading
                        size="headingxl"
                        as="h5"
                        className="mt-[54px] tracking-[-0.69px] Itext-white-a700 md:text-[24px] sm:text-[22px]"
                      >
                        Daily Fun
                      </Heading>
                      <Heading
                        size="text7xl"
                        as="h6"
                        className="mt-1.5 !font-normal tracking-[-0.64px] !text-white-a700 md:text-[22px]"
                      >
                        Guess the Term
                      </Heading>
                      <div className="ml-10 mr-[34px] mt-[34px] flex flex-col gap-2.5 self-stretch md:mx-0">
                        <TextFrames />
                        <TextFrames className="ml-14 mr-10 md:mx-0" />
                      </div>
                      <div className="mt-[52px] h-[150px] self-stretch bg-[url(/public/images/img_group_105.svg)] bg-cover bg-no-repeat p-11 lg:h-auto md:h-auto md:p-5 sm:p-4">
                        <Heading
                          size="textmd"
                          as="p"
                          className="mt-[26px] text-center !font-normal leading-[150%] tracking-[-0.28px] !text-black-900"
                        >
                          Hint: It is the program that, after being initially
                          loaded into the computer
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                size="6xl"
                shape="circle"
                className="absolute bottom-3.5 right-[14%] m-auto w-[64px] !rounded-[32px] border-[0.5px] border-solid border-gray-50 shadow-md"
              >
                <Img src="images/img_icon_chatbot.svg" />
              </Button>
            </div>
            <div>
              <div className="flex items-start justify-center gap-[9px] rounded-[10px] border border-solid border-gray-200 bg-blue-50_01 py-2 sm:flex-col">
                <div className="flex w-[96%] flex-col gap-3.5 self-center overflow-x-scroll sm:w-full sm:px-5">
                  <div className="flex w-[360px] flex-wrap items-center justify-between gap-5">
                    <Heading
                      size="text5xl"
                      as="p"
                      className="!font-normal tracking-[-0.51px] !text-gray-900_01"
                    >
                      Upcoming Events
                    </Heading>
                    <a href="#">
                      <Heading
                        size="textxl"
                        as="p"
                        className="tracking-[-0.37px] !text-blue-800"
                      >
                        View all
                      </Heading>
                    </a>
                  </div>
                  <div className="flex w-[366px] flex-col gap-2">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d, index) => (
                        <EventDetails
                          {...d}
                          key={"listsciencefair" + index}
                          className="rounded-[10px] border border-solid border-blue_gray-100 bg-white-a700"
                        />
                      ))}
                    </Suspense>
                  </div>
                </div>
                <div className="mt-[60px] h-[66px] w-[3px] bg-blue-800 sm:mt-0 sm:h-[3px] sm:w-[66px] sm:px-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
