import { Text, Img } from "./..";
import React from "react";

export default function UserProfile1({
  userImage = "images/img_close_black_900.svg",
  userDuration = "3 day",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center`}>
      <Img
        src={userImage}
        alt="3 Day"
        className="relative z-[3] h-[28px] w-[28px]"
      />
      <Text as="p" className="tracking-[-0.32px] !text-gray-800">
        {userDuration}
      </Text>
    </div>
  );
}
