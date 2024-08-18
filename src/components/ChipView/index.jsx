import React from "react";
import PropTypes from "prop-types";

const noOp = () => {};
const defaultList = [];

function ChipView(props) {
  const {
    options = defaultList,
    setOptions = noOp,
    values = defaultList,
    setValues = noOp,
    children,
    ...restProps
  } = props;

  const deleteOption = (value) => (event) => {
    event?.preventDefault();
    setOptions((options) => options.filter((option) => option.value !== value));
  };

  const toggle = (value) => (event) => {
    event?.preventDefault();
    if (typeof setValues === "function") {
      setValues((values) => {
        const newValues = values.includes(value)
          ? values.filter((v) => v !== value)
          : [...values, value];
        return options
          .filter((option) => newValues.includes(option.value))
          .map((option) => option.value);
      });
    }
  };

  React.useEffect(() => {
    if (typeof setValues === "function") {
      setValues((values) => {
        if (
          values.every((value) =>
            options.find((option) => option.value === value)
          )
        ) {
          return values;
        }
        return options
          .filter((option) => values.includes(option.value))
          .map((option) => option.value);
      });
    }
  }, [options, setValues]);

  return (
    <div {...restProps}>
      {typeof children === "function"
        ? options.map((option, index) =>
            children({
              index,
              value: option.value,
              label: option.label,
              isSelected: values.includes(option.value),
              toggle: toggle(option.value),
              delete: deleteOption(option.value),
            })
          )
        : children}
    </div>
  );
}

ChipView.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ),
  setOptions: PropTypes.func,
  values: PropTypes.arrayOf(PropTypes.string),
  setValues: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};

export { ChipView };
