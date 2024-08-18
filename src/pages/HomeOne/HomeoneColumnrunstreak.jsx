import { Heading } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

const data = [
  { userImage: "images/img_group_1000002384.svg", userDuration: "3 day" },
  { userImage: "images/img_group_1000002385.svg", userDuration: "6 day" },
  { userImage: "images/img_group_1000002386.svg", userDuration: "12 day" },
  { userImage: "images/img_group_1000002387.svg", userDuration: "18 day" },
  { userImage: "images/img_group_1000002388.svg", userDuration: "25 day" },
  { userImage: "images/img_group_1000002389.svg", userDuration: "32 day" },
];

export default function HomeoneColumnrunstreak() {
  return (
    <div className="mt-4 flex flex-col items-center gap-[18px] px-3">
      <Heading
        size="textxl"
        as="h4"
        className="tracking-[-0.37px] !text-gray-800"
      >
        Run Streaks Targets
      </Heading>
      <div className="self-stretch rounded-[10px] border border-solid border-blue_gray-100_02 bg-gray-50">
        <div className="flex gap-3 md:flex-row">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile1
                {...d}
                key={"listзDayone" + index}
                className="mt-1 w-[14%]"
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
