import React from "react";
const variantClasses = {
  h1: "font-extrabold md:text-[48px] sm:text-[48px] text-[70px]",
  h2: "font-bold sm:text-[40px] md:text-[46px] text-[50px]",
  h3: "font-bold sm:text-[31px] md:text-[33px] text-[35px]",
  h4: "font-normal sm:text-[21px] md:text-[23px] text-[25px]",
  h5: "sm:text-[18px] md:text-[20px] text-[22px]",
  h6: "font-bold text-[20px]",
  body1: "font-bold text-[17px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
