import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button, SelectBox, Input } from "../../components";
import CourseOverview from "../../components/CourseOverview";
import { CloseSVG } from "../../components/Input/close.jsx";
import { ReactTable } from "../../components/ReactTable";
import UserProfile5 from "../../components/UserProfile5";
import ProfileRowFour from "./ProfileRowFour";
import { createColumnHelper } from "@tanstack/react-table";
import React, { Suspense } from "react";

const data = [
  {
    courseIcon: "images/img_icon_course.svg",
    courseTitle: "Courses",
    completedCoursesCount: "3",
    completedCoursesLabel: "Completed",
    ongoingCoursesCount: "4",
    ongoingCoursesLabel: "Ongoing",
  },
  {
    courseIcon: "images/img_icon_certificate.svg",
    courseTitle: "Certificates",
    completedCoursesCount: "3",
    completedCoursesLabel: "Completed",
    ongoingCoursesCount: "4",
    ongoingCoursesLabel: "Ongoing",
  },
  {
    courseIcon: "images/img_icon_projects.svg",
    courseTitle: "Projects",
    completedCoursesCount: "5",
    completedCoursesLabel: "Completed",
    ongoingCoursesCount: "3",
    ongoingCoursesLabel: "Ongoing",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const tableData = [
  {
    rowrank: "1",
    rowname: "kriti Das",
    rowcourse: "6",
    rowhours: "240",
    rowbadge: "images/img_mask_group.svg",
    vectorfive: "images/img_vector_yellow_700.svg",
    vectornine: "images/img_vector_16x18.png",
    imagethree: "images/img_group_yellow_800_01.svg",
  },
  {
    rowrank: "2",
    rowname: "Aditya Pawar",
    rowcourse: "5",
    rowhours: "210",
    rowbadge: "images/img_mask_group_white_a700.svg",
    vectorfive: "images/img_vector_gray_500_03.svg",
    vectornine: "images/img_vector_16x18.png",
    imagethree: "images/img_group_gray_600.svg",
  },
  {
    rowrank: "3",
    rowname: "Raj Gupta",
    rowcourse: "4",
    rowhours: "190",
    rowbadge: "images/img_mask_group_white_a700_38x38.svg",
    vectorfive: "images/img_vector_lime_900.svg",
    vectornine: "images/img_vector_16x18.png",
    imagethree: "images/img_group_deep_orange_800.svg",
  },
  {
    rowrank: "9",
    rowname: "You",
    rowcourse: "2",
    rowhours: "92",
  },
];

export default function ProfilePage() {
  const [searchBarValue6, setSearchBarValue6] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowrank", {
        cell: (info) => (
          <div>
            <Button
              color="gray_200"
              size="xl"
              shape="round"
              className="mr-1.5 self-stretch font-semibold !text-gray-700 md:mr-0"
            >
              {info.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Heading
              as="h5"
              className="mb-1.5 tracking-[-0.41px] !text-gray-800"
            >
              Rank
            </Heading>
          </div>
        ),
        meta: { width: "44px" },
      }),
      tableColumnHelper.accessor("rowname", {
        cell: (info) => (
          <div className="ml-10 flex flex-1">
            <Heading as="p" className="tracking-[-0.41px]">
              {info.getValue()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="ml-10 flex flex-1">
            <Heading
              as="h6"
              className="mb-1.5 tracking-[-0.41px] !text-gray-800"
            >
              Name
            </Heading>
          </div>
        ),
        meta: { width: "194px" },
      }),
      tableColumnHelper.accessor("rowcourse", {
        cell: (info) => (
          <div className="flex">
            <Heading as="p" className="tracking-[-0.41px]">
              {info.getValue()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Heading
              as="p"
              className="mb-1.5 tracking-[-0.41px] !text-gray-800"
            >
              Course
            </Heading>
          </div>
        ),
        meta: { width: "92px" },
      }),
      tableColumnHelper.accessor("rowhours", {
        cell: (info) => (
          <div className="flex">
            <Heading as="p" className="tracking-[-0.41px]">
              {info.getValue()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Heading
              as="p"
              className="mb-1.5 tracking-[-0.41px] !text-gray-800"
            >
              Hours
            </Heading>
          </div>
        ),
        meta: { width: "104px" },
      }),
      tableColumnHelper.accessor("rowbadge", {
        cell: (info) => (
          <div className="flex">
            <div className="relative h-[38px] w-[66%]">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
                <div className="relative z-[3] flex flex-col items-center">
                  <div className="relative z-[4] h-[38px] w-[38px] rounded-[18px] bg-gradient4" />
                  <Img
                    src={info.getValue()}
                    alt="Image"
                    className="relative mt-[-38px] h-[38px] w-full lg:h-auto md:h-auto"
                  />
                </div>
                <div className="relative mt-[-38px] flex items-center justify-end">
                  <div className="relative z-[2] h-[30px] w-[30px] rounded-[14px] bg-yellow-800_01" />
                  <img
                    src={info.row.original.vectorfive}
                    alt="vector"
                    className="relative ml-[-14px] h-[38px]"
                  />
                </div>
              </div>
              <div className="absolute bottom- left-e right-0 top-0 2-[5] m-auto h-[28px] w-[28px] rounded-[14px] bg-gradient" />
              <div className="absolute bottom-0 left-0 right-0 top-0 z-[6] m-auto flex h-max flex-col">
                <Img
                  src={info.row.original.vectornine}
                  alt="Vector"
                  className="relative z-[7] h-[16px] object-cover"
                />
                <img
                  src={info.row.original.imagethree}
                  alt="Image"
                  className="relative mt-[-16px] h-[16px]"
                />
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Heading as="p" className="tracking-[-0.41px] !text-gray-800">
              Badge
            </Heading>
          </div>
        ),
        meta: { width: "58px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta
          name="description"
          content="web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col gap-8 bg-gray-50_02">
        <header>
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
                value={searchBarValue6}
                onChange={(e) => setSearchBarValue6(e.target.value)}
                suffix={
                  searchBarValue6?.length > 0 ? (
                    <CloseSVG
                      onclick={() => setSearchBarValue6("")}
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
                placeholder={"English"}
                options={dropDownOptions}
                className="w-[52%] gap-2 font-semibold"
              />
              <Img
                src="images/img_ellipse_2.png"
                alt="Image"
                className="h-[52px] w-[52px] rounded-[26px] object-cover"
              />
            </div>
          </div>
          <div className="relative mt-[-2px] flex justify-center bg-amber-300_02 py-1">
            <div className="container-xs flex justify-center px-14 lg:px-5 md:px-5">
              <Heading
                size="text7xl"
                as="p"
                className="capitalize md:text-[22px]"
              >
                profile
              </Heading>
            </div>
          </div>
        </header>
        <div className="mb-1 flex flex-col items-center gap-3.5">
          <ProfileRowFour />
          <div className="container-xs px-14 lg:px-5 md:px-5">
            <div className="ml-1.5 flex gap-[46px] md:ml-0 md:flex-col">
              <div className="flex flex-1 flex-col gap-4 md:self-stretch">
                <div className="flex flex-col items-start gap-4 rounded-[10px] border border-solid border-blue_gray-100_02 bg-gray-50 px-[26px] py-6 sm:p-4">
                  <Heading
                    size="text7xl"
                    as="h2"
                    className="tracking-[-0.64px] md:text-[22px]"
                  >
                    Overview
                  </Heading>
                  <div className="flex gap-[46px] self-stretch md:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d, index) => (
                        <CourseOverview
                          {...d}
                          key={"listcoursesone" + index}
                          className="bg-gray-50_01"
                        />
                      ))}
                    </Suspense>
                  </div>
                </div>
                <div className="flex flex-col items-center rounded-[10px] border border-solid border-blue_gray-100_02 bg-gray-50 p-4">
                  <Heading
                    size="text7xl"
                    as="h3"
                    className="mt-2 self-start tracking-[-0.64px] md:text-[22px]"
                  >
                    Ongoing Courses
                  </Heading>
                  <div className="mt-3.5 flex flex-col gap-6 self-stretch">
                    <UserProfile5 />
                    <UserProfile5
                      userImage="images/img_rectangle_16643_1.png"
                      titleText="Developing Kids Website from Scratch"
                      courseByText="Course By:"
                      instructorName="Ravikant Rathore"
                      completionPercentage="45%"
                      resumeButtonText="Resume"
                    />
                  </div>
                  <Button
                    color="gray_200"
                    shape="round"
                    className="mt-6 min-w-[78px] font-semibold"
                  >
                    See all
                  </Button>
                </div>
              </div>
              <div className="flex w-[44%] flex-col gap-3.5 md:w-full">
                <div className="flex flex-col gap-3.5 rounded-[10px] border border-solid border-blue_gray-100_02_bg-gray-50">
                  <div className="ml-[26px] mr-11 mt-6 flex flex-col items-start gap-1.5 md:mx-0">
                    <Heading
                      size="text7xl"
                      as="h4"
                      className="tracking-[-0.64px] md:text-[22px]"
                    >
                      Leaderboard
                    </Heading>
                    <ReactTable
                      size="xs"
                      bodyProps={{ className: "" }}
                      className="self-stretch"
                      columns={tableColumns}
                      data={tableData}
                    />
                  </div>
                  <div className="flex flex-col gap-2.5 rounded-b1-[10px] rounded-br-[10px] border border-solid border-gray-200 bg-blue-50 px-3.5 py-6 sm:py-4">
                    <div className="ml-2.5 mr-3.5 flex items-center justify-center md:mx-0">
                      <Heading
                        size="text7xl"
                        as="p"
                        className="tracking-[-0.64px] md:text-[22px]"
                      >
                        Badges
                      </Heading>
                      <div className="flex flex-1 items-center justify-end gap-2.5">
                        <Heading
                          size="textxl"
                          as="p"
                          className="tracking-[-0.37px] !text-gray-800"
                        >
                          You have
                        </Heading>
                        <Button
                          variant="outline"
                          shape="round"
                          rightIcon={
                            <Img
                              src="images/img_close_black_900_16x16.svg"
                              alt="Close"
                              className="my-0.5 h-[16px] w-[16px]"
                            />
                          }
                          className="min-w-[64px] gap-2 font-medium !text-gray-900"
                        >
                          7
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-end gap-3.5 sm:flex-col">
                      <div className="flex w-full flex-col items-center sm:w-full">
                        <Img
                          src="images/img_close_black_900.svg"
                          alt="Close"
                          className="mx-3 h-[28px] w-[28px] md:mx-0"
                        />
                        <Text
                          as="p"
                          className="tracking-[-0.32px] !text-gray-800"
                        >
                          1 course
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-center sm:w-full">
                        <Img
                          src="images/img_group_1000002385.svg"
                          alt="Httpslottief"
                          className="mx-2 h-[40px] w-[40px] object-cover md:mx-0"
                        />
                        <Text
                          as="p"
                          className="relative mt-[-2px] tracking-[-0.32px] !text-gray-800"
                        >
                          3 course
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-center sm:w-full">
                        <Img
                          src="images/img_play.svg"
                          alt="Play"
                          className="h-[30px]"
                        />
                        <Text
                          as="p"
                          className="tracking-[-0.32px] !text-gray-800"
                        >
                          4 course
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-center sm:w-full">
                        <Img
                          src="images/img_close_blue_gray_100_02.svg"
                          alt="Close"
                          className="h-[28px] w-[28px]"
                        />
                        <Text
                          as="p"
                          className="tracking-[-0.32px] !text-gray-400"
                        >
                          5 Course
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-center sm:w-full">
                        <Img
                          src="images/img_user.svg"
                          alt="User"
                          className="h-[28px] w-[28px]"
                        />
                        <Text
                          as="p"
                          className="tracking-[-0.32px] !text-gray-400"
                        >
                          7 Course
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-center sm:w-full">
                        <Img
                          src="images/img_user.svg"
                          alt="User"
                          className="h-[28px] w-[28px]"
                        />
                        <Text
                          as="p"
                          className="tracking-[-0.32px] !text-gray-400"
                        >
                          8 Course
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-center sm:w-full">
                        <Img
                          src="images/img_https_lottief.svg"
                          alt="Httpslottief"
                          className="mx-2 h-[40px] w-[40px] object-cover md:mx-0"
                        />
                        <Text
                          as="p"
                          className="relative mt-[-2px] tracking-[-0.32px] !text-gray-400"
                        >
                          9 Course
                        </Text>
                      </div>
                      <div className="flex w-full flex-col items-center sm:w-full">
                        <Img
                          src="images/img_https_lottief.svg"
                          alt="Httpslottief"
                          className="mx-2.5 h-[40px] w-[40px] object-cover md:mx-0"
                        />
                        <Text
                          as="p"
                          className="relative mt-[-2px] tracking-[-0.32px] !text-gray-400"
                        >
                          12 Course
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[10px] border border-solid border-gray-200 bg-gray-200 p-4">
                  <div className="mb-1 flex flex-col gap-5">
                    <div className="mx-3 flex items-center gap-5 md:mx-0">
                      <Img
                        src="images/img_fire.svg"
                        alt="Fire"
                        className="h-[62px] w-[8%] object-contain"
                      />
                      <div className="flex flex-1 flex-col items-start">
                        <Heading
                          size="headingxl"
                          as="h3"
                          className="tracking-[-0.69px] !text-gray-800 md:text-[24px] sm:text-[22px]"
                        >
                          16 day streak
                        </Heading>
                        <Heading
                          as="p"
                          className="!font-normal tracking-[-0.41px] !text-gray-800"
                        >
                          Way to go!
                        </Heading>
                      </div>
                    </div>
                    <div className="flex justify-center sm:flex-col">
                      <div className="flex flex-1 flex-col items-end sm:self-stretch">
                        <Img
                          src="images/img_checkmark.svg"
                          alt="Checkmark"
                          className="h-[20px] w-[20px]"
                        />
                        <Text
                          size="texts"
                          as="p"
                          className="mr-1 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:mr-0"
                        >
                          M
                        </Text>
                      </div>
                      <div className="ml-2 flex flex-col items-end sm:ml-0">
                        <Img
                          src="images/img_checkmark.svg"
                          alt="Checkmark"
                          className="h-[20px] w-[20px]"
                        />
                        <Text
                          size="texts"
                          as="p"
                          className="mr-1.5 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:mr-0"
                        >
                          T
                        </Text>
                      </div>
                      <div className="ml-2 flex flex-col items-end sm:ml-0">
                        <Img
                          src="images/img_checkmark.svg"
                          alt="Checkmark"
                          className="h-[20px] w-[20px]"
                        />
                        <Text
                          size="texts"
                          as="p"
                          className="mr-1 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:mr-0"
                        >
                          W
                        </Text>
                      </div>
                      <div className="ml-2 flex w-[6%] flex-col items-end sm:ml-0 sm:w-full">
                        <Text
                          size="textxs"
                          as="p"
                          className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-gray-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
                        >
                          23
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="mr-1 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:mr-0"
                        >
                          T
                        </Text>
                      </div>
                      <div className="ml-2 flex w-[6%] flex-col items-end sm:ml-0 sm:w-full">
                        <Text
                          size="textxs"
                          as="p"
                          className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-gray-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
                        >
                          24
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="mr-1 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:mr-0"
                        >
                          F
                        </Text>
                      </div>
                      <div className="ml-2 flex w-[6%] flex-col items-end sm:ml-0 sm:w-full">
                        <Text
                          size="textxs"
                          as="p"
                          className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-gray-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
                        >
                          25
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="mr-1 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:mr-0"
                        >
                          S
                        </Text>
                      </div>
                      <div className="ml-2 flex w-[6%] flex-col items-end sm:ml-0 sm:w-full">
                        <Text
                          size="textxs"
                          as="p"
                          className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-gray-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
                        >
                          26
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="mr-1 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:mr-0"
                        >
                          S
                        </Text>
                      </div>
                      <div className="ml-2 flex w-[6%] flex-col items-end sm:ml-0 sm:w-full">
                        <Text
                          size="textxs"
                          as="p"
                          className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-gray-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
                        >
                          27
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="mr-1 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:mr-0"
                        >
                          M
                        </Text>
                      </div>
                      <div className="ml-2 flex w-[6%] flex-col items-end sm:ml-0 sm:w-full">
                        <Text
                          size="textxs"
                          as="p"
                          className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-gray-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
                        >
                          28
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="mr-1 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:mr-0"
                        >
                          T
                        </Text>
                      </div>
                      <div className="ml-2 flex w-[6%] flex-col items-end sm:ml-0 sm:w-full">
                        <Text
                          size="textxs"
                          as="p"
                          className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-gray-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
                        >
                          29
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="mr-1 !text-[11.76px] tracking-[-0.27px] !text-blue-800"
                        >
                          W
                        </Text>
                      </div>
                      <div className="ml-2 flex w-[6%] flex-col items-end sm:ml-0 sm:w-full">
                        <Text
                          size="textxs"
                          as="p"
                          className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-gray-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
                        >
                          30
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="mr-1 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:mr-0"
                        >
                          T
                        </Text>
                      </div>
                      <div className="ml-2 flex w-[6%] flex-col items-end sm:ml-0 sm:w-full">
                        <Text
                          size="textxs"
                          as="p"
                          className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-gray-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
                        >
                          31
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="mr-1 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:mr-0"
                        >
                          F
                        </Text>
                      </div>
                      <div className="ml-2 flex w-[6%] flex-col items-end sm:ml-0 sm:w-full">
                        <Text
                          size="textxs"
                          as="p"
                          className="flex h-[20px] w-[20px] items-center justify-center rounded-[10px] border-[0.65px] border-solid border-blue-800 bg-gray-50 text-center !text-[10.46px] tracking-[-0.24px] !text-blue-800"
                        >
                          1
                        </Text>
                        <Text
                          size="texts"
                          as="p"
                          className="mr-1 !text-[11.76px] tracking-[-0.27px] !text-blue-800 md:mr-0"
                        >
                          S
                        </Text>
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
