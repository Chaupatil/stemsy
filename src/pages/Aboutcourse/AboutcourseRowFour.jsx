import { SelectBox, Img, Text, Heading } from "../../components";
import UserProfile6 from "../../components/UserProfile6";
import React, { Suspense } from "react";

const data = [
  { introductionText: "Introduction", timeText: "7:34" },
  { introductionText: "Introduction", timeText: "7:34" },
  { introductionText: "Introduction", timeText: "7:34" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AboutcourseRowFour() {
  return (
    <div className="self-stretch">
      <div className="flex justify-center bg-amber-300_02 py-[46px] md:py-5 sm:py-4">
        <div className="container-xs flex justify-center lg:px-5 md:px-5">
          <div className="flex w-full flex-col items-center gap-[42px]">
            <div className="flex flex-wrap items-center justify-between gap-5 self-stretch">
              <Heading
                size="text8xl"
                as="h3"
                className="tracking-[-0.74px] md:text-[26px] sm:text-[24px]"
              >
                Lessons in This Class
              </Heading>
              <Text
                size="text6xl"
                as="p"
                className="!font-medium tracking-[-0.55px]"
              >
                10 Lessons (2 hrs 32 mins)
              </Text>
            </div>
            <div className="flex flex-col gap-3.5 self-stretch">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <UserProfile6 {...d} key={"listvectorone" + index} />
                ))}
              </Suspense>
            </div>
            <SelectBox
              color="gray_900"
              size="xs"
              variant="outline"
              shape="round"
              indicator={
                <Img
                  src="images/img_arrowdown_black_900.svg"
                  alt="Arrow Down"
                  className="h-[20px] w-[20px]"
                />
              }
              name="secondary_one"
              placeholder={`View More`}
              options={dropDownOptions}
              className="w-[10%] gap-2 font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
