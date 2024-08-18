import React from "react";

const sizes = {
  textmd: "text-[12px] font-medium not-italic",
  textxl: "text-[16px] font-medium not-italic lg:text-[13px]",
  text3xl: "text-[18px] font-medium lg:text-[15px]",
  text4xl: "text-[20px] font-medium lg:text-[17px]",
  text5xl: "text-[22px] font-medium not-italic lg:text-[18px]",
  text7xl:
    "text-[28px] font-medium lg:text-[23px] md:text-[26px] sm:text-[24px]",
  text8xl:
    "text-[32px] font-medium lg:text-[27px] md:text-[30px] sm:text-[28px]",
  headingxs: "text-[14px] font-semibold",
  headings: "text-[16px] font-semibold lg:text-[13px]",
  headingmd: "text-[18px] font-semibold lg:text-[15px]",
  headinglg: "text-[24px] font-semibold lg:text-[20px] md:text-[22px]",
  headingxl:
    "text-[30px] font-semibold lg:text-[25px] md:text-[28px] sm:text-[26px]",
  heading2xl:
    "text-[34px] font-semibold lg:text-[28px] md:text-[32px] sm:text-[30px]",
  heading3xl:
    "text-[37px] font-semibold lg:text-[31px] md:text-[35px] sm:text-[33px]",
  heading4xl:
    "text-[38px] font-semibold lg:text-[32px] md:text-[36px] sm:text-[34px]",
  heading5xl:
    "text-[40px] font-semibold lg:text-[34px] md:text-[38px] sm:text-[36px]",
  heading6xl:
    "text-[48px] font-bold lg:text-[40px] md:text-[44px] sm:text-[38px]",
  heading7xl:
    "text-[52px] font-semibold lg:text-[44px] md:text-[44px] sm:text-[38px]",
};

const Heading = ({
  children,
  className = "",
  size = "text3xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-gray-900 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {" "}
      {children}
    </Component>
  );
};

export { Heading };
