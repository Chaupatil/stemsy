import { Heading, Img } from "./..";
import React from "react";

export default function CourseOverview({
  courseIcon = "images/img_icon_course.svg",
  courseTitle = "Courses",
  completedCoursesCount = "3",
  completedCoursesLabel = "Completed",
  ongoingCoursesCount = "4",
  ongoingCoursesLabel = "Ongoing",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-2 rounded-[10px]`}
    >
      <div className="flex items-center justify-center gap-0.5 self-stretch rounded-[10px] bg-green-50 p-4">
        <Img src={courseIcon} alt="Courses" className="h-[24px] w-[24px]" />
        <Heading size="text5xl" as="p" className="tracking-[-0.51px]">
          {courseTitle}
        </Heading>
      </div>
      <div className="mx-7 mb-1.5 flex items-center justify-center gap-3.5 self-stretch">
        <div className="flex flex-1 flex-col items-center justify-center">
          <Heading size="text7xl" as="p" className="tracking-[-0.64px]">
            {completedCoursesCount}
          </Heading>
          <Heading
            size="textmd"
            as="p"
            className="relative mt-[-4px] tracking-[-0.28px] !text-gray-700"
          >
            {completedCoursesLabel}
          </Heading>
        </div>
        <div className="h-[54px] w-px self-end bg-blue_gray-100_02" />
        <div className="flex flex-col items-center justify-center">
          <Heading size="text7xl" as="p" className="tracking-[-0.64px]">
            {ongoingCoursesCount}
          </Heading>
          <Heading
            size="textmd"
            as="p"
            className="relative mt-[-4px] tracking-[-0.28px] !text-gray-700"
          >
            {ongoingCoursesLabel}
          </Heading>
        </div>
      </div>
    </div>
  );
}
