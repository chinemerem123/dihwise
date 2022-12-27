import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder10: "rounded-radius10" };
const variants = { FillWhiteA700: "bg-white_A700 text-gray_800" };
const sizes = { sm: "md:p-[13px] p-[21px] sm:px-[15px] sm:py-[10px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
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
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf(["FillWhiteA700"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "FillWhiteA700",
  size: "sm",
};

export { Button };
