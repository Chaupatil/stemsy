import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};

const variants = {
  fill: {
    blue_50_02: "bg-blue-50_02 text-gray-500_01",
    indigo_500_0c: "bg-indigo-500_0c text-gray-500_01",
    light_green_800_0c: "bg-light_green-800_0c text-gray-500_01",
    blue_gray_50: "bg-blue_gray-50 text-gray-900",
    gray_50: "bg-gray-50",
  },
};

const sizes = {
  sm: "h-[60px] px-[22px] text-[16px]",
  md: "h-[68px] pl-[26px] pr-5 text-[20px]",
  xs: "h-[56px] px-5 text-[18px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xs",
      color = "gray_50",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text ${
          shape && shapes[shape]
        } ${variant && (variants[variant]?.[color] || variants[variant])} ${
          size && sizes[size]
        }`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "md", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_50_02",
    "indigo_500_0c",
    "light_green_800_0c",
    "blue_gray_50",
    "gray_50",
  ]),
};

export { Input };
