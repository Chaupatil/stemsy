import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-lg",
};
const variants = {
  outline: {
    black_900_33: "border-black-900_33 border border-solid text-gray-700",
    gray_50: "border-gray-50 border border-solid text-gray-50",
    indigo_400_01:
      "border-indigo-400_01 border-[3px] border-solid text-white-a700",
    white_A700: "border-white-a700 border border-solid text-white-a700",
    blue_800: "border-blue-800 border border-solid text-blue-800",
  },
  fill: {
    blue_50: "bg-blue-50 text-blue-800",
    amber_300_02: "bg-amber-300_02 text-gray-900",
    gray_700_66: "bg-gray-700_66",
    blue_800: "bg-blue-800",
    white_A700: "bg-white-a700 text-blue-800",
    amber_A400: "bg-amber-a400 text-black-900",
    gray_200: "bg-gray-200 text-blue-800",
  },
};
const sizes = {
  "2xl": "h-[42px] px-2",
  "5xl": "h-[60px] px-[34px] text-[16px]",
  "8xl": "h-[112px] px-9",
  "7xl": "h-[84px] px-[26px]",
  "6xl": "h-[64px] px-5",
  sm: "h-[30px] px-2.5 text-[14px]",
  xs: "h-[28px] px-2",
  "4xl": "h-[56px] px-[22px] text-[18px]",
  xl: "h-[40px] px-[22px] text-[16px]",
  "3xl": "h-[54px] px-3.5",
  md: "h-[32px] px-1.5",
  lg: "h-[36px] px-[22px] text-[14px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "blue_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf([
    "2xl",
    "5xl",
    "8xl",
    "7xl",
    "6xl",
    "sm",
    "xs",
    "4xl",
    "xl",
    "3xl",
    "md",
    "lg",
  ]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900_33",
    "gray_50",
    "indigo_400_01",
    "white_A700",
    "blue_800",
    "blue_50",
    "amber_300_02",
    "gray_700_66",
    "amber A400",
    "gray_200",
  ]),
};

export { Button };
