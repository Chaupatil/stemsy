import { Heading, Text, Img } from "./..";
import React from "react";

export default function EventDetails({
  eventTitle = "Science Fair",
  eventOrganizer = "Miss Shweta",
  eventImage = "images/img_ellipse_2_62x62.png",
  eventDay = "Monday",
  eventDate = "14",
  eventTimeLabel = "Time",
  eventTime = "07:00 PM",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center gap-5 flex-1`}
    >
      <div className="mt-2 flex flex-col items-start self-stretch">
        <div className="relative z-[9] flex flex-col items-start self-center">
          <Text
            size="text6xl"
            as="p"
            className="!text-[24.74px] !font-medium tracking-[-0.57px] !text-blue_gray-900"
          >
            {eventTitle}
          </Text>
          <Text
            size="text2xl"
            as="p"
            className="!text-[17.32px] tracking-[-0.40px] !text-gray-600_02"
          >
            {eventOrganizer}
          </Text>
        </div>
        <div className="relative mt-[-62px] flex w-[76%] bg-white-a700">
          <img
            src={eventImage}
            alt="Science Fair"
            className="h-[62px] w-[62px] rounded-[30px] object-cover"
          />
        </div>
      </div>
      <div className="mx-5 flex items-start justify-between gap-5 self-stretch">
        <div className="flex flex-col items-center self-center bg-white-a700 px-5">
          <Heading
            size="textxl"
            as="p"
            className="!font-normal tracking-[-0.37px] !text-gray-600_02"
          >
            {eventDay}
          </Heading>
          <Text size="text10xl" as="p" className="tracking-[-0.80px]">
            {eventDate}
          </Text>
        </div>
        <div className="mr-5 flex flex-col items-center gap-1 bg-white-a700 px-1">
          <Heading
            size="textxl"
            as="p"
            className="tracking-[-0.37px] !text-gray-600_02"
          >
            {eventTimeLabel}
          </Heading>
          <Heading
            size="textxl"
            as="p"
            className="tracking-[-0.37px] !text-blue_gray-900"
          >
            {eventTime}
          </Heading>
        </div>
      </div>
    </div>
  );
}
