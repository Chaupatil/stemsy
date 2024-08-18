import React from "react";

const sizes = {
  textxs: "text-[10px] font-normal not-italic",
  texts: "text-[11px] font-normal not-italic",
  textlg: "text-[14px] font-normal not-italic",
  text2xl: "text-[17px] font-normal not-italic lg:text-[14px]",
  text6xl: "text-[24px] font-normal not-italic lg:text-[20px] md:text-[22px]",
  text9xl:
    "text-[34px] font-normal not-italic lg:text-[28px] md:text-[32px] sm:text-[30px]",
  text10xl:
    "text-[35px] font-normal not-italic lg:text-[29px] md:text-[33px] sm:text-[31px]",
  text11xl:
    "text-[48px] font-normal not-italic lg:text-[40px] md:text-[44px] sm:text-[38px]",
};

const Text = ({
  children,
  className = "",
  as,
  size = "textlg",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-gray-900 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
